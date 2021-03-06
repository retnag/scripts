include(["engines", "wine", "quick_script", "online_installer_script"]);
include(["engines", "wine", "plugins", "csmt"]);
include(["engines", "wine", "plugins", "windows_version"]);
include(["engines", "wine", "verbs", "vcrun2015"]);
include(["engines", "wine", "verbs", "corefonts"]);

var installerImplementation = {
    run: function () {
        new OnlineInstallerScript()
            .name("Overwatch")
            .editor("Blizzard")
            .applicationHomepage("http://www.playoverwatch.com/")
            .author("ImperatorS79")
            .url("https://eu.battle.net/download/getInstaller?os=win&installer=Overwatch-Setup.exe")
        //The checksum is different each time you download
            .wineVersion(LATEST_STAGING_VERSION)
            .wineDistribution("staging")
            .wineArchitecture("amd64")
            .category("Games")
            .executable("Overwatch.exe")
            .preInstall(function (wine/*, wizard*/) {
                wine.windowsVersion("winxp");
                wine.vcrun2015();
                wine.corefonts();
                wine.enableCSMT();
            })
            .go();
    }
};

/* exported Installer */
var Installer = Java.extend(org.phoenicis.scripts.Installer, installerImplementation);
