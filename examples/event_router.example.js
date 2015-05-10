/**
 * Example of implementing an event router
 */

/**
 * Single entry point for handling facts
 *
 * @param sub subscribe object
 * @param pub publish object
 * @param fact object
 */
module.exports.newFact = function(sub, pub, fact) {

    if (fact.name == 'known.fact.name') {
        // do the thing here
    }
};