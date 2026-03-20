Window_MenuCommand.prototype.makeCommandList = function() {
    this.addMainCommands();       // 添加主要命令 (物品, 技能等)
    //this.addFormationCommand();   // 添加整队命令
    //this.addOriginalCommands();   // 添加其他插件注入的命令
    // this.addOptionsCommand();  // 将这行注释掉，即可隐藏"选项"
    this.addSaveCommand();        // 添加保存命令
    this.addGameEndCommand();     // 添加结束游戏命令
};