'use strict';

(function (prototype) {
  if (prototype.hasOwnProperty('content')) {
    return;
  }

  Object.defineProperty(prototype, 'content', { 
    enumerable: false, 
    configurable: true, 
    get: function() { 
      if (this.localName !== 'template') { 
        return; 
      } 

      if (!this._content) { 
        this._content = document.createDocumentFragment()

        for (var i = 0; i < this.childNodes.length; i++) { 
          this._content.appendChild(this.childNodes[i].cloneNode(true))
        }
      }

      return this._content; 
    } 
  }); 
})(HTMLUnknownElement.prototype)