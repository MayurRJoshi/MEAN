/* Business logic */

var mylogic = {

	index : function(req , res , next){
		res.status(200).send();
	},

	error : function(req , res , next){
		res.status(404).send();
	}
}

module.exports = mylogic;