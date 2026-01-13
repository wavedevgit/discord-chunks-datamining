/** Chunk was on 22979 **/
/** chunk id: 200178, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk389458 = require("./389458.js"),
  Chunk663618 = require("./663618.js"),
  Chunk445212 = require("./445212.js");

function p() {
  let [e, t] = r.useState(""), n = (0, s.e7)([d.Z], () => d.Z.getAllWordsSorted().map((e, t) => {
    let [n, a] = e;
    return {
      word: n,
      count: a,
      value: a,
      idx: t
    }
  }), [], s.pF), i = r.useMemo(() => 0 === e.length ? n : n.filter(t => {
    let {
      word: n
    } = t;
    return n.toLowerCase().startsWith(e.toLowerCase())
  }), [n, e]), p = r.useCallback(() => {
    c.Z.dispatch({
      type: "DEV_TOOLS_WORD_FREQUENCY_RESET"
    })
  }, []);
  return (0, a.jsxs)("div", {
    className: l()(u.panel, m.panel),
    children: [n.length > 0 && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(o.Text, {
        variant: "text-md/semibold",
        className: m.sectionTitle,
        children: ["Word Frequencies (", i.length, " unique words)"]
      }), (0, a.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: "This is a list of the most common short words found in messages sent and received by this client. They're ignored by the mention suggestions experiment to avoid distracting suggestions. These statistics are stored locally only."
      }), (0, a.jsxs)("div", {
        className: m.headerSection,
        children: [(0, a.jsx)(o.E1j, {
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
        className: m.resultsSection,
        children: (0, a.jsx)(o.zJl, {
          className: m.resultsContainer,
          children: (0, a.jsxs)("div", {
            className: m.resultsTable,
            children: [(0, a.jsxs)("div", {
              className: l()(u.tableHeader, m.tableHeader),
              children: [(0, a.jsx)("div", {
                className: m.indexColumn,
                children: "Index"
              }), (0, a.jsx)("div", {
                className: m.wordColumn,
                children: "Word"
              }), (0, a.jsx)("div", {
                className: m.valueColumn,
                children: "Count"
              })]
            }), i.map(e => {
              let {
                word: t,
                value: n,
                idx: r
              } = e;
              return (0, a.jsxs)("div", {
                className: l()(u.tableRow, m.tableRow),
                children: [(0, a.jsx)("div", {
                  className: m.indexColumn,
                  children: (0, a.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    children: r + 1
                  })
                }), (0, a.jsx)("div", {
                  className: m.wordColumn,
                  children: (0, a.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    children: t
                  })
                }), (0, a.jsx)("div", {
                  className: m.valueColumn,
                  children: (0, a.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    children: n
                  })
                })]
              }, "".concat(t, "-").concat(r))
            })]
          })
        })
      })]
    }), 0 === n.length && (0, a.jsx)("div", {
      className: m.emptyState,
      children: (0, a.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: "Load messages in a channel to see word frequency analysis."
      })
    }), n.length > 0 && 0 === i.length && e.length > 0 && (0, a.jsx)("div", {
      className: m.emptyState,
      children: (0, a.jsxs)(o.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: ['No words found starting with "', e, '".']
      })
    })]
  })
}