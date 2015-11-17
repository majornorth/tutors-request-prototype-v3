/* ==========================================================================
   Author's custom scripts
   ========================================================================== */


jQuery(document).ready(function() {
  $('.tab-option').click(function() {
    toggleTab(this);
  });

  function toggleTab(element) {
    if ($(element).hasClass("selected")) {
      $(element).removeClass("selected");
    } else {
      $(element).siblings().removeClass("selected");
      $(element).addClass("selected");
    }
  };

  $('.add-question').click(function() {
    addQuestion(this);
  });

  function addQuestion(element) {
    $("<input class='form-control specific-question' rows='2' placeholder='e.g. I&#39;m stuck on problem 2 of the assignment'></input>").insertBefore($(element));
  }
});