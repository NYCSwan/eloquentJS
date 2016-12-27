$(function() {
	// setup
	var $list; 
	var $newItemForm; 
	var $newItemButton;
	var item = '';
	$list = ('ul');
	$newItemForm = $('#newItemForm');
	$newItemButton = $('#newItemButton');

	$('li').hide().each(function(index) {
		$(this).delay(50 * index).fadeIn(1600);
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
// add new item to list
	$newItemForm.on('submit', function(e) {
		e.preventDefault();
		var text = $('#itemDescription').val();
		$('#shoppingList').append("<li>" + text + "</li>");
		$('input:text').val('');
		updateCount();
	});
// click handling 
	$('#shoppingList').on('click', 'li', function() {
		var $this = $(this);
		var complete = $(this).hasClass('complete');
		if(complete === true) {
			$this.animate({
				opacity: 0.0,
				left: '+=180'
			}, 500, 'swing', function() {
				$this.remove();
			});
		} else {
			item = $this.text();
			$this.remove();
			$('#shoppingList')
				.append('<li class=\"complete\">' + item + '</li>')
				.hide().fadeIn(300);
			updateCount();
		}
	});
});