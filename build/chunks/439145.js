/** Chunk was on web.js **/
/** chunk id: 439145, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk934886 = require("./934886.js"),
  Chunk747105 = require("./747105.js"),
  Chunk573750 = require("./573750.js"),
  Chunk750253 = require("./750253.js"),
  Chunk676286 = require("./676286.js"),
  Chunk505122 = require("./505122.js"),
  Chunk797686 = require("./797686.js"),
  Chunk494277 = require("./494277.js"),
  d = Chunk573750.isBrowser("IE");

function f(e, t) {
  if (!e) return "[empty]";
  var n = p(e, t);
  return n.nodeType === Node.TEXT_NODE ? n.textContent : (u(n) || c(false), n.outerHTML)
}

function p(e, t) {
  var n = true !== t ? t(e) : [];
  if (e.nodeType === Node.TEXT_NODE) {
    var r = e.textContent.length;
    return l(e).createTextNode("[text " + r + (n.length ? " | " + n.join(", ") : "") + "]")
  }
  var i = e.cloneNode();
  1 === i.nodeType && n.length && i.setAttribute("data-labels", n.join(", "));
  for (var a = e.childNodes, s = 0; s < a.length; s++) i.appendChild(p(a[s], t));
  return i
}

function _(e, t) {
  for (var n = e, r = n; n;)
    if (u(n) && r.hasAttribute("contenteditable")) return f(n, t);
    else r = n = n.parentNode;
  return "Could not find contentEditable parent of node"
}

function h(e) {
  return null === e.nodeValue ? e.childNodes.length : e.nodeValue.length
}

function m(e, t, n, r) {
  var a = o();
  if (e.extend && s(a, t)) {
    n > h(t) && i.logSelectionStateFailure({
      anonymizedDom: _(t),
      extraParams: JSON.stringify({
        offset: n
      }),
      selectionState: JSON.stringify(r.toJS())
    });
    var l = t === e.focusNode;
    try {
      e.extend(t, n)
    } catch (s) {
      throw i.logSelectionStateFailure({
        anonymizedDom: _(t, function(t) {
          var n = [];
          return t === a && n.push("active element"), t === e.anchorNode && n.push("selection anchor node"), t === e.focusNode && n.push("selection focus node"), n
        }),
        extraParams: JSON.stringify({
          activeElementName: a ? a.nodeName : null,
          nodeIsFocus: t === e.focusNode,
          nodeWasFocus: l,
          selectionRangeCount: e.rangeCount,
          selectionAnchorNodeName: e.anchorNode ? e.anchorNode.nodeName : null,
          selectionAnchorOffset: e.anchorOffset,
          selectionFocusNodeName: e.focusNode ? e.focusNode.nodeName : null,
          selectionFocusOffset: e.focusOffset,
          message: s ? "" + s : null,
          offset: n
        }, null, 2),
        selectionState: JSON.stringify(r.toJS(), null, 2)
      }), s
    }
  } else if (e.rangeCount > 0) {
    var c = e.getRangeAt(0);
    c.setEnd(t, n), e.addRange(c.cloneRange())
  }
}

function g(e, t, n, a) {
  var s = l(t).createRange();
  if (n > h(t) && (i.logSelectionStateFailure({
      anonymizedDom: _(t),
      extraParams: JSON.stringify({
        offset: n
      }),
      selectionState: JSON.stringify(a.toJS())
    }), r.handleExtensionCausedError()), s.setStart(t, n), d) try {
    e.addRange(s)
  } catch (e) {} else e.addRange(s)
}
module.exports = {
  setDraftEditorSelection: function(e, t, n, r, i) {
    var a = l(t);
    if (s(a.documentElement, t)) {
      var o = a.defaultView.getSelection(),
        c = e.getAnchorKey(),
        u = e.getAnchorOffset(),
        d = e.getFocusKey(),
        f = e.getFocusOffset(),
        p = e.getIsBackward();
      if (!o.extend && p) {
        var _ = c,
          h = u;
        c = d, u = f, d = _, f = h, p = false
      }
      var E = c === n && r <= u && i >= u,
        b = d === n && r <= f && i >= f;
      if (E && b) {
        o.removeAllRanges(), g(o, t, u - r, e), m(o, t, f - r, e);
        return
      }
      if (p) {
        if (b && (o.removeAllRanges(), g(o, t, f - r, e)), E) {
          var y = o.focusNode,
            O = o.focusOffset;
          o.removeAllRanges(), g(o, t, u - r, e), m(o, y, O, e)
        }
      } else E && (o.removeAllRanges(), g(o, t, u - r, e)), b && m(o, t, f - r, e)
    }
  },
  addFocusToSelection: m
}