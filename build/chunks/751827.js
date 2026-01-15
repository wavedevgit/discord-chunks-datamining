/** Chunk was on web.js **/
/** chunk id: 751827, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk833866 = require("./833866.js"),
  Chunk949235 = require("./949235.js"),
  Chunk169774 = require("./169774.js"),
  Chunk808570 = require("./808570.js"),
  Chunk924125 = require("./924125.js"),
  Chunk258329 = require("./258329.js"),
  Chunk581079 = require("./581079.js"),
  Chunk108993 = require("./108993.js"),
  d = Chunk169774.isBrowser("IE");

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
  for (var a = e.childNodes, o = 0; o < a.length; o++) i.appendChild(p(a[o], t));
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
  var a = s();
  if (e.extend && o(a, t)) {
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
    } catch (o) {
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
          message: o ? "" + o : null,
          offset: n
        }, null, 2),
        selectionState: JSON.stringify(r.toJS(), null, 2)
      }), o
    }
  } else if (e.rangeCount > 0) {
    var c = e.getRangeAt(0);
    c.setEnd(t, n), e.addRange(c.cloneRange())
  }
}

function g(e, t, n, a) {
  var o = l(t).createRange();
  if (n > h(t) && (i.logSelectionStateFailure({
      anonymizedDom: _(t),
      extraParams: JSON.stringify({
        offset: n
      }),
      selectionState: JSON.stringify(a.toJS())
    }), r.handleExtensionCausedError()), o.setStart(t, n), d) try {
    e.addRange(o)
  } catch (e) {} else e.addRange(o)
}
module.exports = {
  setDraftEditorSelection: function(e, t, n, r, i) {
    var a = l(t);
    if (o(a.documentElement, t)) {
      var s = a.defaultView.getSelection(),
        c = e.getAnchorKey(),
        u = e.getAnchorOffset(),
        d = e.getFocusKey(),
        f = e.getFocusOffset(),
        p = e.getIsBackward();
      if (!s.extend && p) {
        var _ = c,
          h = u;
        c = d, u = f, d = _, f = h, p = false
      }
      var E = c === n && r <= u && i >= u,
        b = d === n && r <= f && i >= f;
      if (E && b) {
        s.removeAllRanges(), g(s, t, u - r, e), m(s, t, f - r, e);
        return
      }
      if (p) {
        if (b && (s.removeAllRanges(), g(s, t, f - r, e)), E) {
          var y = s.focusNode,
            O = s.focusOffset;
          s.removeAllRanges(), g(s, t, u - r, e), m(s, y, O, e)
        }
      } else E && (s.removeAllRanges(), g(s, t, u - r, e)), b && m(s, t, f - r, e)
    }
  },
  addFocusToSelection: m
}