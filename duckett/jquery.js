$(function() {
	// setup
	var $list, $newItemForm, $newItemButton;
	var item = '';
	$list = ('ul');
	$newItemForm = $('#newItemForm');
	$newItemButton = $('#newItemButton');

	$('li').hide().each(function(index) {
		$(this).delay(450 * index).fadeIn(1600);
	});
// item counter
	function updateCount() {
		var items = $('li[class!=complete]').length;
		$('#counter').text(items);
	}
	updateCount();

// setup form for new items
	$newItemButton.show();
	$newItemForm.hide();
	$('#showForm').on('click', function() {
		$newItemButton.hide();
		$newItemForm.show();
	});
});