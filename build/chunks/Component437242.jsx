/** Chunk was on 47841 **/
/** chunk id: 437242, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk47167 = require("./47167.js"),
  Chunk734057 = require("./734057.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk239705 = require("./239705.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk86181 = require("./86181.js");

function g(e) {
  var t;
  let {
    action: n,
    triggerType: g,
    toggled: b,
    onToggleAction: m
  } = e, p = e => () => m(e), x = (0, d.x)(n.type, n, g), h = null == (t = n.metadata) ? true : t.channelId, j = (0, i.bG)([o.default, c.A, a.A], () => {
    let e = a.A.getChannel(h);
    return null == e ? null : (0, s.m1)(e, o.default, c.A)
  }, [h]);
  if (null == x) return null;
  let {
    headerText: O,
    descriptionText: y,
    icon: v
  } = x;
  return (0, r.jsxs)("div", {
    className: f.Ik,
    children: [(0, r.jsx)("div", {
      className: f.TV,
      children: (0, r.jsx)(v, {
        size: "md",
        color: "currentColor",
        className: f.gE
      })
    }), (0, r.jsxs)("div", {
      className: f.xj,
      children: [(0, r.jsx)(l.Heading, {
        variant: "heading-sm/semibold",
        children: O
      }), (0, r.jsx)(l.Text, {
        color: "interactive-text-default",
        variant: "text-xs/medium",
        children: y
      }), b && (0, r.jsxs)(l.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: [null != j && u.intl.format(u.t["8Sr/ar"], {
          channelName: j
        }), (0, r.jsx)(l.DUT, {
          onClick: p(true),
          className: f._2,
          tag: "span",
          role: "link",
          children: u.intl.string(u.t["3gUsJb"])
        })]
      })]
    }), (0, r.jsx)("div", {
      children: (0, r.jsx)(l.DUT, {
        onClick: x.isEditable ? p(false) : true,
        children: (0, r.jsx)(l.P7L, {
          checked: b,
          disabled: !x.isEditable
        })
      })
    })]
  })
}