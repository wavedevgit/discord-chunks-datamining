/** Chunk was on 6583 **/
/** chunk id: 17506, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  m: () => o
});
var o = function() {
  function e(e) {
    var t = this;
    this._insertTag = function(e) {
      var n;
      n = 0 === t.tags.length ? t.insertionPoint ? t.insertionPoint.nextSibling : t.prepend ? t.container.firstChild : t.before : t.tags[t.tags.length - 1].nextSibling, t.container.insertBefore(e, n), t.tags.push(e)
    }, this.isSpeedy = true === e.speedy || e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.prepend = e.prepend, this.insertionPoint = e.insertionPoint, this.before = null
  }
  var t = module.prototype;
  return exports.hydrate = function(e) {
    e.forEach(this._insertTag)
  }, exports.insert = function(e) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(((t = document.createElement("style")).setAttribute("data-emotion", this.key), true !== this.nonce && t.setAttribute("nonce", this.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t));
    var t, n = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var o = function(e) {
        if (e.sheet) return e.sheet;
        for (var t = 0; t < document.styleSheets.length; t++)
          if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
      }(n);
      try {
        o.insertRule(e, o.cssRules.length)
      } catch (e) {}
    } else n.appendChild(document.createTextNode(e));
    this.ctr++
  }, exports.flush = function() {
    this.tags.forEach(function(e) {
      var t;
      return null == (t = e.parentNode) ? true : t.removeChild(e)
    }), this.tags = [], this.ctr = 0
  }, module
}()