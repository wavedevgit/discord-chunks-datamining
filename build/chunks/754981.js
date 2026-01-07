/** Chunk was on web.js **/
/** chunk id: 754981, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var Chunk169774 = require("./169774.js"),
  Chunk466312 = require("./466312.js"),
  Chunk131513 = require("./131513.js"),
  Chunk65183 = require("./65183.js"),
  Chunk581079 = require("./581079.js"),
  Chunk467159 = require("./467159.js"),
  u = Chunk65183.Map,
  d = {
    subtree: true,
    characterData: true,
    childList: true,
    characterDataOldValue: false,
    attributes: false
  },
  f = Chunk169774.isBrowser("IE <= 11");
module.exports = function() {
  function e(e) {
    var t = this;
    r(this, "observer", true), r(this, "container", true), r(this, "mutations", true), r(this, "onCharData", true), this.container = e, this.mutations = u();
    var n = o(e);
    n.MutationObserver && !f ? this.observer = new n.MutationObserver(function(e) {
      return t.registerMutations(e)
    }) : this.onCharData = function(e) {
      e.target instanceof Node || l(false), t.registerMutation({
        type: "characterData",
        target: e.target
      })
    }
  }
  var t = e.prototype;
  return t.start = function() {
    this.observer ? this.observer.observe(this.container, d) : this.container.addEventListener("DOMCharacterDataModified", this.onCharData)
  }, t.stopAndFlushMutations = function() {
    var e = this.observer;
    e ? (this.registerMutations(e.takeRecords()), e.disconnect()) : this.container.removeEventListener("DOMCharacterDataModified", this.onCharData);
    var t = this.mutations;
    return this.mutations = u(), t
  }, t.registerMutations = function(e) {
    for (var t = 0; t < e.length; t++) this.registerMutation(e[t])
  }, t.getMutationTextContent = function(e) {
    var t = e.type,
      n = e.target,
      r = e.removedNodes;
    if ("characterData" === t) {
      if ("" !== n.textContent) return f ? n.textContent.replace("\n", "") : n.textContent
    } else if ("childList" === t) {
      if (r && r.length) return "";
      else if ("" !== n.textContent) return n.textContent
    }
    return null
  }, t.registerMutation = function(e) {
    var t = this.getMutationTextContent(e);
    if (null != t) {
      var n = c(a(e.target));
      this.mutations = this.mutations.set(n, t)
    }
  }, e
}()