Window_ItemList.prototype.drawItemNumber = function(item, x, y, width) {
    if (item['itypeId'] != 2)
    {
        if (this.needsNumber()) {
            this.drawText(':', x, y, width - this.textWidth('00'), 'right');
            this.drawText($gameParty.numItems(item), x, y, width, 'right');
        }
    }
};