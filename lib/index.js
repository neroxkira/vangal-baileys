"use strict";

const chalk = require("chalk");
if (process.env.BAILEYS_BANNER === '1') {

const pink = chalk.hex("#FF3366");
const purple = chalk.hex("#A855F7");
const cyan = chalk.hex("#00D4FF");
const white = chalk.whiteBright;
const gray = chalk.gray;
const green = chalk.hex("#00FFAA");
const yellow = chalk.hex("#FFD700");

console.log("");
console.log(pink("╔══════════════════════════════════════════════╗"));
console.log(
    pink("║") +
    purple.bold("              ☠︎ NEROX VAN GAL ☠︎             ") +
    pink("║")
);
console.log(pink("╠══════════════════════════════════════════════╣"));

console.log(
    pink("║ ") +
    cyan("✦ ") +
    white.bold("Developer") +
    gray("  ➜ ") +
    purple.bold("NEROX VAN GAL") +
    " ".repeat(12) +
    pink("║")
);

console.log(
    pink("║ ") +
    cyan("✦ ") +
    white.bold("Modified") +
    gray("   ➜ ") +
    white("BAILEYS") +
    " ".repeat(19) +
    pink("║")
);

console.log(
    pink("║ ") +
    cyan("✦ ") +
    white.bold("Version") +
    gray("    ➜ ") +
    yellow.bold("NEROX EDITION") +
    " ".repeat(12) +
    pink("║")
);

console.log(
    pink("║ ") +
    cyan("✦ ") +
    white.bold("Status") +
    gray("     ➜ ") +
    green.bold("ONLINE ☠︎") +
    " ".repeat(17) +
    pink("║")
);

console.log(pink("╚══════════════════════════════════════════════╝"));
console.log("");

/* ─────────────────────────────────────────────
 *              NEROX VAN GAL
 * ───────────────────────────────────────────── */

console.log(purple("              ☠︎  N E R O X  V A N  G A L  ☠︎"));
console.log(gray("                 Modified Baileys Edition"));
console.log("");

}
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {

    if (k2 === undefined) k2 = k;

    var desc = Object.getOwnPropertyDescriptor(m, k);

    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }

    Object.defineProperty(o, k2, desc);

}) : (function(o, m, k, k2) {

    if (k2 === undefined) k2 = k;

    o[k2] = m[k];

}));

var __exportStar = (this && this.__exportStar) || function(m, exports) {

    for (var p in m) {
        if (
            p !== "default" &&
            !Object.prototype.hasOwnProperty.call(exports, p)
        ) {
            __createBinding(exports, m, p);
        }
    }

};

var __importDefault = (this && this.__importDefault) || function(mod) {

    return (mod && mod.__esModule)
        ? mod
        : {
            "default": mod
        };

};

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.makeWASocket = void 0;

const Socket_1 = __importDefault(require("./Socket"));

exports.makeWASocket = Socket_1.default;

__exportStar(require("../WAProto"), exports);

__exportStar(require("./Utils"), exports);

__exportStar(require("./Types"), exports);

__exportStar(require("./Store"), exports);

__exportStar(require("./Defaults"), exports);

__exportStar(require("./WABinary"), exports);

__exportStar(require("./WAM"), exports);

__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;
