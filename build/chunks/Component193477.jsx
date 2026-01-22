/** Chunk was on 47841 **/
/** chunk id: 193477, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk544028 = require("./544028.js"),
  Chunk71393 = require("./71393.js"),
  Chunk555337 = require("./555337.js"),
  Chunk199940 = require("./199940.js"),
  Chunk132514 = require("./132514.js"),
  Chunk399056 = require("./399056.jsx"),
  Chunk914191 = require("./914191.jsx"),
  Chunk803064 = require("./803064.jsx"),
  Chunk435732 = require("./435732.jsx"),
  Chunk429526 = require("./429526.jsx"),
  Chunk758023 = require("./758023.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk659233 = require("./659233.js"),
  Chunk87906 = require("./87906.js"),
  Chunk467069 = require("./467069.js"),
  Chunk544351 = require("./544351.js"),
  Chunk361776 = require("./361776.js");

function N(e) {
  let {
    guild: t,
    saveOnClose: n
  } = e, [o, d] = i.useState("new"), N = i.useMemo(() => [{
    value: "new",
    name: j.intl.string(j.t["4e5u3l"])
  }, {
    value: "existing",
    name: j.intl.string(j.t.cmkOsU)
  }], []), _ = (0, l.bG)([c.A], () => c.A.theme);
  i.useEffect(() => () => {
    let e = f.A.getSettings();
    (0, u.W5)(t.id, e)
  }, [n, t.id]);
  let S = i.useMemo(() => (0, s.qB)(_) ? "existing" === o ? v : E : "existing" === o ? y : A, [o, _]);
  return (0, r.jsxs)("div", {
    className: O.MY,
    children: [(0, r.jsxs)("div", {
      className: O.Cd,
      children: [(0, r.jsx)(a.Heading, {
        className: O.wx,
        variant: "heading-lg/extrabold",
        children: j.intl.string(j.t.tbUZVr)
      }), (0, r.jsx)("div", {
        className: O.eg,
        children: (0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: j.intl.string(j.t.DvHCq5)
        })
      }), (0, r.jsx)("div", {
        className: O.uW,
        children: (0, r.jsx)(h.A, {
          guildId: t.id
        })
      }), (0, r.jsx)("div", {
        className: O.DY
      }), (0, r.jsx)(a.Heading, {
        className: O.wx,
        variant: "heading-lg/extrabold",
        children: j.intl.string(j.t["roY/wu"])
      }), (0, r.jsx)("div", {
        className: O.eg,
        children: (0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: j.intl.format(j.t["/lWYYS"], {})
        })
      }), (0, r.jsx)("div", {
        className: O.uW,
        children: (0, r.jsx)(b.A, {})
      }), (0, r.jsx)(g.A, {
        guildId: t.id
      }), (0, r.jsx)("div", {
        className: O.DY
      }), (0, r.jsx)(a.Heading, {
        className: O.wx,
        variant: "heading-lg/extrabold",
        children: j.intl.string(j.t.hEjHyH)
      }), (0, r.jsxs)("div", {
        className: O.eg,
        children: [(0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: j.intl.string(j.t.YnvKVE)
        }), (0, r.jsxs)("ul", {
          className: O.fF,
          children: [(0, r.jsx)("li", {
            children: (0, r.jsx)(a.Text, {
              tag: "span",
              variant: "text-sm/medium",
              color: "text-default",
              children: j.intl.string(j.t["6jEvRU"])
            })
          }), (0, r.jsx)("li", {
            children: (0, r.jsx)(a.Text, {
              tag: "span",
              variant: "text-sm/medium",
              color: "text-default",
              children: j.intl.string(j.t["Fq+UsH"])
            })
          }), (0, r.jsx)("li", {
            children: (0, r.jsx)(a.Text, {
              tag: "span",
              variant: "text-sm/medium",
              color: "text-default",
              children: j.intl.string(j.t.LeEPoH)
            })
          })]
        })]
      }), (0, r.jsxs)("div", {
        className: O.uW,
        children: [(0, r.jsx)(x.A, {
          guildId: t.id
        }), (0, r.jsx)(p.A, {
          guildId: t.id
        })]
      }), (0, r.jsx)("div", {
        className: O.DY
      }), (0, r.jsx)(m.A, {
        guild: t
      })]
    }), (0, r.jsxs)("div", {
      className: O.DK,
      children: [(0, r.jsx)("div", {
        className: O.YB,
        children: (0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: j.intl.string(j.t.EVV6uZ)
        })
      }), (0, r.jsx)("img", {
        className: O.oz,
        src: S,
        alt: j.intl.string(j.t.ST4UOy)
      }), (0, r.jsx)(a.IzF, {
        options: N,
        value: o,
        onChange: e => d(e.value),
        look: "pill"
      })]
    })]
  })
}

function _(e) {
  let {
    saveOnClose: t
  } = e, n = (0, l.bG)([d.A, o.A], () => {
    let e = d.A.getGuildId();
    return o.A.getGuild(e)
  });
  return null == n ? null : (0, r.jsx)(N, {
    guild: n,
    saveOnClose: t
  })
}