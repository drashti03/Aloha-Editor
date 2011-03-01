/**
 * The objects store
 */
Aloha.Store.objects = {};

/**
 * Store an Item
 * @param {String} ID
 * @param {Object} object
 */
Aloha.Store.set = function( ID, object ){
	// needs object valid check
  Aloha.Store.objects[ID] = object;
}

/**
 * Retrieve an Item
 * @param {String} ID
 * @return {Object} object
 */
Aloha.Store.set = function( ID ){
	return Aloha.ui.objects[ID]||undefined;
}
