include(["engines", "wine", "quick_script", "online_installer_script"]);
include(["engines", "wine", "plugins", "windows_version"]);
include(["engines", "wine", "verbs", "vcrun2015"]);
include(["engines", "wine", "verbs", "corefonts"]);

var installerImplementation = {
    run: function () {
        new OnlineInstallerScript()
            .name("Hearthstone")
            .editor("Blizzard")
            .applicationHomepage("https://eu.battle.net/hearthstone/")
            .author("ImperatorS79")
            .url("https://eu.battle.net/download/getInstaller?os=win&installer=Hearthstone-Setup.exe")
            .category("Games")
            .executable("Hearthstone.exe")
            .wineVersion(LATEST_STAGING_VERSION)
            .wineDistribution("staging")
            .preInstall(function (wine/*, wizard*/) {
                wine.windowsVersion("winxp");
                wine.vcrun2015();
                wine.corefonts();
            })
            .go();
    }
};

/* exported Installer */
var Installer = Java.extend(org.phoenicis.scripts.Installer, installerImplementation);
