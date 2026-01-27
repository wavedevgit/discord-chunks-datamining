/** Chunk was on web.js **/
/** chunk id: 668447, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => f,
  Ut: () => d,
  rx: () => o
});
var Chunk64700 = require("./64700.js"),
  i = function() {
    this.locks = [], this.listeners = []
  };

function a(e, t, n) {
  true === n && (n = false);
  var r = function(e) {
      return document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: function(e) {
          return e.tabIndex >= 0 && !e.disabled ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
      })
    }(e),
    i = t.compareDocumentPosition(e),
    a = null;
  i & Node.DOCUMENT_POSITION_PRECEDING || n ? a = r.firstChild() : i & Node.DOCUMENT_POSITION_FOLLOWING && (a = r.lastChild()), (null != a ? a : e).focus()
}
i.prototype.add = function(e, t) {
  var n = {
    uid: e,
    setEnabled: t,
    enabled: false
  };
  this.toggleLayer(this.current(), false), this.locks.push(n), this.toggleLayer(n, true), this.emit()
}, i.prototype.remove = function(e) {
  var t = this.locks.find(function(t) {
    return t.uid === e
  });
  this.toggleLayer(t, false);
  var n = this.current(),
    r = null != n && n.uid === e;
  this.locks = this.locks.filter(function(t) {
    return t.uid !== e
  }), r && this.toggleLayer(this.current(), true), this.emit()
}, i.prototype.current = function() {
  return this.locks[this.locks.length - 1]
}, i.prototype.isActive = function() {
  var e = this.current();
  return null != e && e.enabled
}, i.prototype.toggleLayer = function(e, t) {
  null != e && (e.setEnabled(t), e.enabled = t)
}, i.prototype.subscribe = function(e) {
  var t = this;
  return this.listeners.push(e), e(this.isActive(), this.locks),
    function() {
      return t.listeners = t.listeners.filter(function(t) {
        return t !== e
      })
    }
}, i.prototype.emit = function() {
  var e = this,
    t = this.isActive();
  this.listeners.forEach(function(n) {
    return n(t, e.locks)
  })
};
var o = new i,
  s = 0;

function l(e) {
  (0, r.useEffect)(function() {
    return o.subscribe(e)
  }, [e])
}

function c(e, t) {
  var n = (0, r.useRef)(document.activeElement);
  (0, r.useLayoutEffect)(function() {
    return function() {
      null != t && t.current || requestAnimationFrame(function() {
        null == e || null == e.current ? null == n || null == n.current || n.current.focus() : e.current.focus()
      })
    }
  }, [])
}

function u(e) {
  var t = (0, r.useState)(function() {
      return e || "lock-" + s++
    })[0],
    n = (0, r.useRef)(false);
  return (0, r.useLayoutEffect)(function() {
    return o.add(t, function(e) {
        return n.current = e
      }),
      function() {
        return o.remove(t)
      }
  }, [t]), n
}
var d = (0, Chunk64700.memo)(function() {
  var e = (0, r.useState)(false),
    t = e[0];
  return l(e[1]), (0, r.createElement)("div", {
    tabIndex: t ? 0 : true,
    style: {
      position: "fixed",
      opacity: 0,
      pointerEvents: "none"
    }
  })
});

function f(e, t) {
  true === t && (t = {});
  var n = t.returnRef,
    i = t.disableReturnRef,
    o = t.attachTo;
  true === o && (o = document);
  var s = t.disable,
    l = o instanceof HTMLElement ? o.ownerDocument : o,
    d = u();
  (0, r.useEffect)(function() {
    s && (d.current = false)
  }, [s, d]), (0, r.useLayoutEffect)(function() {
    var t = e.current;

    function n(t) {
      if (d.current) {
        var n = e.current;
        if (null != n) {
          var r = t.target || l.body;
          n.contains(r) || (t.preventDefault(), t.stopImmediatePropagation(), a(n, r))
        }
      }
    }

    function r(t) {
      if (d.current) {
        var n = e.current;
        if (null != n) {
          null != t.relatedTarget && t.relatedTarget !== l.body || (t.preventDefault(), n.focus());
          var r = t.target || l.body;
          n.contains(r) || a(n, r)
        }
      }
    }
    return null == t || null == l.activeElement || t.contains(l.activeElement) || null != t.querySelector("[autofocus]") || a(t, l.activeElement, true), o.addEventListener("focusin", n, {
        capture: true
      }), o.addEventListener("focusout", r, {
        capture: true
      }),
      function() {
        o.removeEventListener("focusin", n, {
          capture: true
        }), o.removeEventListener("focusout", r, {
          capture: true
        })
      }
  }, [o, l, e, d]), c(n, i)
}