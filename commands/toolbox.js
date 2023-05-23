const Discord = require('discord.js')

module.exports = class ToolBox {
    /**
    * @param ID { string }
    */
    static Is_Member_Ping(ID)
    {
        //Teste si ça contient ni & (pour ping de rôle) ou # (ping de chann/vocaux)
        return ((!ID.includes("&")&&(!ID.includes("#"))))
    }
}
