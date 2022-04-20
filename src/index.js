$(function () {
  $("#selector").on("changed.bs.select", function (event, clickedIndex, isSelected, previousValue) {
    console.log('clickedIndex: ', clickedIndex, ' isSelected: ', isSelected, ' previousValue: ', previousValue);
  });
});