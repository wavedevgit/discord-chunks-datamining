/** Chunk was on web.js **/
/** chunk id: 991261, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  OU: () => d,
  ZP: () => f,
  fC: () => a
});
var Chunk473749 = require("./473749.js"),
  i = function() {
    this.locks = [], this.listeners = []
  };

function o(e, t, n) {
  true === n && (n = false);
  var r = function(e) {
      return document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: function(e) {
          return e.tabIndex >= 0 && !e.disabled ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
      })
    }(e),
    i = t.compareDocumentPosition(e),
    o = null;
  i & Node.DOCUMENT_POSITION_PRECEDING || n ? o = r.firstChild() : i & Node.DOCUMENT_POSITION_FOLLOWING && (o = r.lastChild()), (null != o ? o : e).focus()
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
  return null != module && module.enabled
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
var a = new i,
  s = 0;

function l(e) {
  (0, r.useEffect)(function() {
    return a.subscribe(e)
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
    return a.add(t, function(e) {
        return n.current = e
      }),
      function() {
        return a.remove(t)
      }
  }, [t]), n
}
var d = (0, Chunk473749.memo)(function() {
  var e = (0, Chunk473749.useState)(false),
    t = module[0];
  return l(module[1]), (0, Chunk473749.createElement)("div", {
    tabIndex: exports ? 0 : true,
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
    a = t.attachTo;
  true === a && (a = document);
  var s = t.disable,
    l = a instanceof HTMLElement ? a.ownerDocument : a,
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
          n.contains(r) || (t.preventDefault(), t.stopImmediatePropagation(), o(n, r))
        }
      }
    }

    function r(t) {
      if (d.current) {
        var n = e.current;
        if (null != n) {
          null != t.relatedTarget && t.relatedTarget !== l.body || (t.preventDefault(), n.focus());
          var r = t.target || l.body;
          n.contains(r) || o(n, r)
        }
      }
    }
    return null == t || null == l.activeElement || t.contains(l.activeElement) || null != t.querySelector("[autofocus]") || o(t, l.activeElement, true), a.addEventListener("focusin", n, {
        capture: true
      }), a.addEventListener("focusout", r, {
        capture: true
      }),
      function() {
        a.removeEventListener("focusin", n, {
          capture: true
        }), a.removeEventListener("focusout", r, {
          capture: true
        })
      }
  }, [a, l, e, d]), c(n, i)
}