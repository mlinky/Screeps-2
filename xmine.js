var xmine = {
    run: function(creep) {



            if (!creep.pos.isEqualTo(Game.flags.minex.pos)){
                    creep.moveTo(Game.flags.minex.pos);
            }else{
                var sources = creep.room.find(FIND_SOURCES);
                target = creep.pos.findClosestByRange(sources);
                if(creep.harvest(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
                }
        }
        
    }
};

module.exports = xmine;