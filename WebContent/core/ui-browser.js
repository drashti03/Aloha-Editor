/*!
*   This file is part of Aloha Editor
*   Author & Copyright (c) 2010 Gentics Software GmbH, aloha@gentics.com
*   Licensed unter the terms of http://www.aloha-editor.com/license.html
*//*
*	Aloha Editor is free software: you can redistribute it and/or modify
*   it under the terms of the GNU Affero General Public License as published by
*   the Free Software Foundation, either version 3 of the License, or
*   (at your option) any later version.*
*
*   Aloha Editor is distributed in the hope that it will be useful,
*   but WITHOUT ANY WARRANTY; without even the implied warranty of
*   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*   GNU Affero General Public License for more details.
*
*   You should have received a copy of the GNU Affero General Public License
*   along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
(function(window, undefined) {
	var
		$ = jQuery = window.alohaQuery,
		GENTICS = window.GENTICS,
		Aloha = GENTICS.Aloha;

/**
 * !!!! ATTENTION !!!!
 * This is work in progress. This implemenation may change heavily.
 * Not yet implemented:
 * - configuring and templating the list
 * - DnD
 * - passing all possible query attributes to the repository
 * - query of subtree
 * - icon representation
 */
GENTICS.Aloha.ui.Browser = function () {
    // the jQuery-browser-ui has to be created... artists wanted...
	$('#ALOHA_Browser_window').append('<div id="ALOHA_Repositories"/>');
	$('#ALOHA_Repositories').accordion();
	// each repository .tree() ...
	$('#ALOHA_Browser_window').append('<div id="ALOHA_View_Panel"/>');
};

GENTICS.Aloha.ui.Browser.prototype = {
	setObjectTypeFilter: function(otf) {
		this.objectTypeFilter = otf;
	},

	getObjectTypeFilter: function() {
		return this.objectTypeFilter;
	},

	show: function() {
		this.win.show(); // first show,
		this.win.toFront(true);
		this.win.focus();
	}
};

})(window);
