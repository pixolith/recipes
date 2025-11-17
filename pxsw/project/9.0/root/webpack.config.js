let Fs = require('fs');

if (process.env.SHOPWARE_MODE === 'storefront') {
    process.env.PUBLIC_PATH = './public';

    // browserslist config in package.json
    process.env.BROWSERSLIST_ENV = 'storefront';
}

if (process.env.SHOPWARE_MODE === 'administration') {
    process.env.PUBLIC_PATH = './public';

    process.env.PX_ENTRY_PATH = 'src/Resources/app/administration/src/px';
    process.env.SHARED_SCSS_PATH = '../../../shared';
    process.env.SHOPWARE_VERSION = '6.7';

    // browserslist config in package.json
    process.env.BROWSERSLIST_ENV = 'administration';
}

let sharedVendorResourcePaths = Fs.existsSync('vendor/pxsw')
    ? ['vendor/pxsw/*/src/Resources/app/_global_resources/**/*.scss']
    : [];

let sharedPluginResourcePaths = Fs.existsSync('custom/plugins')
    ? ['custom/plugins/Pxsw*/src/Resources/app/_global_resources/**/*.scss']
    : [];

let uses = Fs.existsSync('vendor/pxsw/project/src/Resources/app/uses.scss')
    ? ['vendor/pxsw/project/src/Resources/app/uses.scss']
    : [];

process.env.RESOURCES_PATHS = JSON.stringify([
    ...uses,
    ...sharedVendorResourcePaths,
    ...sharedPluginResourcePaths,
]);

if (
    !(
        process.env.SHOPWARE_MODE === 'storefront' ||
        process.env.SHOPWARE_MODE === 'administration'
    )
) {
    process.stderr.write(
        'SHOPWARE_MODE needs to be storefront or administration',
    );
    process.exit(1);
}

module.exports = require('@pixolith/webpack-sw6-config')[process.env.SHOPWARE_MODE];
