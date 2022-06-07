module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true // 只需将该项设置为 true 即可
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module",
        "allowImportExportEverywhere": true, // 不限制eslint对import使用位置
    },
    "plugins": [
        "vue"
    ],
    "rules": {
      "space-before-function-paren": 0,
      'comma-dangle':2
    }
}
