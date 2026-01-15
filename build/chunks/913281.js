/** Chunk was on web.js **/
/** chunk id: 913281, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ht: () => w
});
var r = 'input:not([inert]),select:not([inert]),textarea:not([inert]),a[href]:not([inert]),button:not([inert]),[tabindex]:not(slot):not([inert]),audio[controls]:not([inert]),video[controls]:not([inert]),[contenteditable]:not([contenteditable="false"]):not([inert]),details>summary:first-of-type:not([inert]),details:not([inert])',
  i = "undefined" == typeof Element,
  a = i ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
  o = !i && Element.prototype.getRootNode ? function(e) {
    var t;
    return null == e || null == (t = e.getRootNode) ? true : t.call(e)
  } : function(e) {
    return null == e ? true : e.ownerDocument
  },
  s = function e(t, n) {
    true === n && (n = true);
    var r, i = null == t || null == (r = t.getAttribute) ? true : r.call(t, "inert");
    return "" === i || "true" === i || n && t && e(t.parentNode)
  },
  l = function(e) {
    var t, n = null == e || null == (t = e.getAttribute) ? true : t.call(e, "contenteditable");
    return "" === n || "true" === n
  },
  c = function(e, t, n) {
    if (s(e)) return [];
    var i = Array.prototype.slice.apply(e.querySelectorAll(r));
    return t && a.call(e, r) && i.unshift(e), i = i.filter(n)
  },
  u = function e(t, n, i) {
    for (var o = [], l = Array.from(t); l.length;) {
      var c = l.shift();
      if (!s(c, false))
        if ("SLOT" === c.tagName) {
          var u = c.assignedElements(),
            d = e(u.length ? u : c.children, true, i);
          i.flatten ? o.push.apply(o, d) : o.push({
            scopeParent: c,
            candidates: d
          })
        } else {
          a.call(c, r) && i.filter(c) && (n || !t.includes(c)) && o.push(c);
          var f = c.shadowRoot || "function" == typeof i.getShadowRoot && i.getShadowRoot(c),
            p = !s(f, false) && (!i.shadowRootFilter || i.shadowRootFilter(c));
          if (f && p) {
            var _ = e(true === f ? c.children : f.children, true, i);
            i.flatten ? o.push.apply(o, _) : o.push({
              scopeParent: c,
              candidates: _
            })
          } else l.unshift.apply(l, c.children)
        }
    }
    return o
  },
  d = function(e) {
    return !isNaN(parseInt(e.getAttribute("tabindex"), 10))
  },
  f = function(e) {
    if (!e) throw Error("No node provided");
    return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || l(e)) && !d(e) ? 0 : e.tabIndex
  },
  p = function(e, t) {
    var n = f(e);
    return n < 0 && t && !d(e) ? 0 : n
  },
  _ = function(e, t) {
    return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex
  },
  h = function(e) {
    return "INPUT" === e.tagName
  },
  m = function(e) {
    return h(e) && "hidden" === e.type
  },
  g = function(e) {
    return "DETAILS" === e.tagName && Array.prototype.slice.apply(e.children).some(function(e) {
      return "SUMMARY" === e.tagName
    })
  },
  E = function(e, t) {
    for (var n = 0; n < e.length; n++)
      if (e[n].checked && e[n].form === t) return e[n]
  },
  b = function(e) {
    if (!e.name) returntrue;
    var t, n = e.form || o(e),
      r = function(e) {
        return n.querySelectorAll('input[type="radio"][name="' + e + '"]')
      };
    if ("undefined" != typeof window && true !== window.CSS && "function" == typeof window.CSS.escape) t = r(window.CSS.escape(e.name));
    else try {
      t = r(e.name)
    } catch (e) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message), false
    }
    var i = E(t, e.form);
    return !i || i === e
  },
  y = function(e) {
    return h(e) && "radio" === e.type
  },
  O = function(e) {
    return y(e) && !b(e)
  },
  v = function(e) {
    var t, n, r, i, a, s, l, c = e && o(e),
      u = null == (t = c) ? true : t.host,
      d = false;
    if (c && c !== e)
      for (d = !!(null != (n = u) && null != (r = n.ownerDocument) && r.contains(u) || null != e && null != (i = e.ownerDocument) && i.contains(e)); !d && u;) d = !!(null != (s = u = null == (a = c = o(u)) ? true : a.host) && null != (l = s.ownerDocument) && l.contains(u));
    return d
  },
  S = function(e) {
    var t = e.getBoundingClientRect(),
      n = t.width,
      r = t.height;
    return 0 === n && 0 === r
  },
  I = function(e, t) {
    var n = t.displayCheck,
      r = t.getShadowRoot;
    if ("hidden" === getComputedStyle(e).visibility) returntrue;
    var i = a.call(e, "details>summary:first-of-type") ? e.parentElement : e;
    if (a.call(i, "details:not([open]) *")) returntrue;
    if (n && "full" !== n && "legacy-full" !== n) {
      if ("non-zero-area" === n) return S(e)
    } else {
      if ("function" == typeof r) {
        for (var s = e; e;) {
          var l = e.parentElement,
            c = o(e);
          if (l && !l.shadowRoot && true === r(l)) return S(e);
          e = e.assignedSlot ? e.assignedSlot : l || c === e.ownerDocument ? l : c.host
        }
        e = s
      }
      if (v(e)) return !e.getClientRects().length;
      if ("legacy-full" !== n) returntrue
    }
    returnfalse
  },
  T = function(e) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
      for (var t = e.parentElement; t;) {
        if ("FIELDSET" === t.tagName && t.disabled) {
          for (var n = 0; n < t.children.length; n++) {
            var r = t.children.item(n);
            if ("LEGEND" === r.tagName) return !!a.call(t, "fieldset[disabled] *") || !r.contains(e)
          }
          returntrue
        }
        t = t.parentElement
      }
    returnfalse
  },
  C = function(e, t) {
    return !(t.disabled || s(t) || m(t) || I(t, e) || g(t) || T(t))
  },
  A = function(e, t) {
    return !(O(t) || 0 > f(t)) && !!C(e, t)
  },
  N = function(e) {
    var t = parseInt(e.getAttribute("tabindex"), 10);
    return !!isNaN(t) || !!(t >= 0)
  },
  P = function e(t) {
    var n = [],
      r = [];
    return t.forEach(function(t, i) {
      var a = !!t.scopeParent,
        o = a ? t.scopeParent : t,
        s = p(o, a),
        l = a ? e(t.candidates) : o;
      0 === s ? a ? n.push.apply(n, l) : n.push(o) : r.push({
        documentOrder: i,
        tabIndex: s,
        item: t,
        isScope: a,
        content: l
      })
    }), r.sort(_).reduce(function(e, t) {
      return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e
    }, []).concat(n)
  },
  w = function(e, t) {
    var n;
    return P(n = (t = t || {}).getShadowRoot ? u([e], t.includeContainer, {
      filter: A.bind(null, t),
      flatten: false,
      getShadowRoot: t.getShadowRoot,
      shadowRootFilter: N
    }) : c(e, t.includeContainer, A.bind(null, t)))
  }