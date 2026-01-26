/** Chunk was on 65298 **/
/** chunk id: 851828, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk236899 = require("./236899.js"),
  Chunk661251 = require("./661251.js"),
  Chunk665646 = require("./665646.js");

function p() {
  let [e, t] = l.useState(""), n = (0, s.bG)([d.A], () => d.A.getAllWordsSorted().map((e, t) => {
    let [n, a] = e;
    return {
      word: n,
      count: a,
      value: a,
      idx: t
    }
  }), [], s.My), r = l.useMemo(() => 0 === e.length ? n : n.filter(t => {
    let {
      word: n
    } = t;
    return n.toLowerCase().startsWith(e.toLowerCase())
  }), [n, e]), p = l.useCallback(() => {
    c.h.dispatch({
      type: "DEV_TOOLS_WORD_FREQUENCY_RESET"
    })
  }, []);
  return (0, a.jsxs)("div", {
    className: i()(u.nd, m.nd),
    children: [n.length > 0 && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(o.Text, {
        variant: "text-md/semibold",
        className: m.Gf,
        children: ["Word Frequencies (", r.length, " unique words)"]
      }), (0, a.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: "This is a list of the most common short words found in messages sent and received by this client. They're ignored by the mention suggestions experiment to avoid distracting suggestions. These statistics are stored locally only."
      }), (0, a.jsxs)("div", {
        className: m.ND,
        children: [(0, a.jsx)(o.IWV, {
          size: "sm",
          query: e,
          onChange: t,
          onClear: () => t(""),
          placeholder: "Filter by words starting with..."
        }), (0, a.jsx)(o.Button, {
          variant: "secondary",
          size: "sm",
          text: "Clear Statistics",
          onClick: p
        })]
      }), (0, a.jsx)("div", {
        className: m.u4,
        children: (0, a.jsx)(o.IpV, {
          className: m.sb,
          children: (0, a.jsxs)("div", {
            className: m.r6,
            children: [(0, a.jsxs)("div", {
              className: i()(u.ZR, m.qd),
              children: [(0, a.jsx)("div", {
                className: m.Xd,
                children: "Index"
              }), (0, a.jsx)("div", {
                className: m.hH,
                children: "Word"
              }), (0, a.jsx)("div", {
                className: m.gR,
                children: "Count"
              })]
            }), r.map(e => {
              let {
                word: t,
                value: n,
                idx: l
              } = e;
              return (0, a.jsxs)("div", {
                className: i()(u.jD, m.jD),
                children: [(0, a.jsx)("div", {
                  className: m.Xd,
                  children: (0, a.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    children: l + 1
                  })
                }), (0, a.jsx)("div", {
                  className: m.hH,
                  children: (0, a.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    children: t
                  })
                }), (0, a.jsx)("div", {
                  className: m.gR,
                  children: (0, a.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    children: n
                  })
                })]
              }, "".concat(t, "-").concat(l))
            })]
          })
        })
      })]
    }), 0 === n.length && (0, a.jsx)("div", {
      className: m.p$,
      children: (0, a.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: "Load messages in a channel to see word frequency analysis."
      })
    }), n.length > 0 && 0 === r.length && e.length > 0 && (0, a.jsx)("div", {
      className: m.p$,
      children: (0, a.jsxs)(o.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: ['No words found starting with "', e, '".']
      })
    })]
  })
}