/**
 * Create a Button Element
 **/
Aloha.ui.createButton = function( ID, config ){
    var
    	$button = $("<button>" + Aloha.API.translate( config.text || ID ) +	"</button>").button();

		// Store the Button
    Aloha.ui.store(ID, {
			config: config,
      $element: $button
    });

		// Return the new button
    return $button;
};
