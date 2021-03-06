const supportsColor = require('supports-color');

module.exports = ({
    colorSupport = supportsColor.stdout,
    process = global.process,
    raw = false,
    env = {}
}) => Object.assign(
    {},
    raw && { stdio: 'inherit' },
    /^win/.test(process.platform) && { detached: false },
    { env: Object.assign(colorSupport ? { FORCE_COLOR: colorSupport.level } : {}, process.env, env) }
);
