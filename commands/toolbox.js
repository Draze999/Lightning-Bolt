const Discord = require('discord.js')

module.exports = class ToolBox {

    static Teams = {
        Red : 1,
        RedOAFO : 2,
        Blue : 3
    }


    /**
    * @param ID { string }
    */
    static Is_Member_Ping(ID)
    {
        //Teste si ça contient ni & (pour ping de rôle) ou # (ping de chann/vocaux)
        return ((!ID.includes("&")&&(!ID.includes("#"))))
    }

    static getStruct(i)
    {
        var obj = {TeamName : "", Statsfile : "", Elo : ""}
        switch(i) {
            case 1:    // Red Lightning
                obj.TeamName = "Red Lightning"
                obj.Statsfile = 'Stats/statsred.json'
                obj.Elo = "2k6"
                return obj
            case 2:    // Red Lightning OAFO
                obj.TeamName = "Red Lightning OAFO"
                obj.Statsfile = 'Stats/statsredOAFO.json'
                obj.Elo = "2k6"
                return obj
            case 3:    // Navy Blue Lightning
                obj.TeamName = "Navy Blue"
                obj.Statsfile = 'Stats/statsblue.json'
                obj.Elo = "4k4"
                return obj
        }
        return obj
    }
}
