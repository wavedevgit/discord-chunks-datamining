/** Chunk was on 91584 **/
/** chunk id: 4145, original params: t,e,r (module,exports,require) **/
"use strict";

function n(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = r, t
}
var Chunk169774 = require("./169774.js"),
  Chunk273083 = require("./273083.js"),
  Chunk894187 = require("./894187.js"),
  Chunk65183 = require("./65183.js"),
  Chunk581079 = require("./581079.js"),
  Chunk467159 = require("./467159.js"),
  l = Chunk65183.Map,
  f = {
    subtree: true,
    characterData: true,
    childList: true,
    characterDataOldValue: false,
    attributes: false
  },
  p = Chunk169774.isBrowser("IE <= 11");
module.exports = function() {
  function t(t) {
    var e = this;
    n(this, "observer", true), n(this, "container", true), n(this, "mutations", true), n(this, "onCharData", true), this.container = t, this.mutations = l();
    var r = a(t);
    r.MutationObserver && !p ? this.observer = new r.MutationObserver(function(t) {
      return e.registerMutations(t)
    }) : this.onCharData = function(t) {
      t.target instanceof Node || s(false), e.registerMutation({
        type: "characterData",
        target: t.target
      })
    }
  }
  var e = module.prototype;
  return exports.start = function() {
    this.observer ? this.observer.observe(this.container, f) : this.container.addEventListener("DOMCharacterDataModified", this.onCharData)
  }, exports.stopAndFlushMutations = function() {
    var t = this.observer;
    module ? (this.registerMutations(module.takeRecords()), module.disconnect()) : this.container.removeEventListener("DOMCharacterDataModified", this.onCharData);
    var e = this.mutations;
    return this.mutations = l(), exports
  }, exports.registerMutations = function(t) {
    for (var e = 0; e < t.length; e++) this.registerMutation(t[e])
  }, exports.getMutationTextContent = function(t) {
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
  }, exports.registerMutation = function(t) {
    var e = this.getMutationTextContent(t);
    if (null != e) {
      var r = c(o(t.target));
      this.mutations = this.mutations.set(r, e)
    }
  }, module
}()