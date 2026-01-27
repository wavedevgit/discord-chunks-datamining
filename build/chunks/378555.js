/** Chunk was on 38939 **/
/** chunk id: 378555, original params: t,e,r (module,exports,require) **/
"use strict";

function n(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = r, t
}
var Chunk573750 = require("./573750.js"),
  Chunk587321 = require("./587321.js"),
  Chunk882270 = require("./882270.js"),
  Chunk116740 = require("./116740.js"),
  Chunk797686 = require("./797686.js"),
  Chunk670200 = require("./670200.js"),
  l = Chunk116740.Map,
  f = {
    subtree: true,
    characterData: true,
    childList: true,
    characterDataOldValue: false,
    attributes: false
  },
  p = Chunk573750.isBrowser("IE <= 11");
module.exports = function() {
  function t(t) {
    var e = this;
    n(this, "observer", true), n(this, "container", true), n(this, "mutations", true), n(this, "onCharData", true), this.container = t, this.mutations = l();
    var r = a(t);
    r.MutationObserver && !p ? this.observer = new r.MutationObserver(function(t) {
      return e.registerMutations(t)
    }) : this.onCharData = function(t) {
      t.target instanceof Node || u(false), e.registerMutation({
        type: "characterData",
        target: t.target
      })
    }
  }
  var e = t.prototype;
  return e.start = function() {
    this.observer ? this.observer.observe(this.container, f) : this.container.addEventListener("DOMCharacterDataModified", this.onCharData)
  }, e.stopAndFlushMutations = function() {
    var t = this.observer;
    t ? (this.registerMutations(t.takeRecords()), t.disconnect()) : this.container.removeEventListener("DOMCharacterDataModified", this.onCharData);
    var e = this.mutations;
    return this.mutations = l(), e
  }, e.registerMutations = function(t) {
    for (var e = 0; e < t.length; e++) this.registerMutation(t[e])
  }, e.getMutationTextContent = function(t) {
    var e = t.type,
      r = t.target,
      n = t.removedNodes;
    if ("characterData" === e) {
      if ("" !== r.textContent) return p ? r.textContent.replace("\n", "") : r.textContent
    } else if ("childList" === e) {
      if (n && n.length) return "";
      else if ("" !== r.textContent) return r.textContent
    }
    return null
  }, e.registerMutation = function(t) {
    var e = this.getMutationTextContent(t);
    if (null != e) {
      var r = c(o(t.target));
      this.mutations = this.mutations.set(r, e)
    }
  }, t
}()