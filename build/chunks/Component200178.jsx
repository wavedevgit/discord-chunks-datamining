/** Chunk was on 28532 **/
/** chunk id: 200178, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk389458 = require("./389458.js"),
  Chunk451429 = require("./451429.js"),
  Chunk603473 = require("./603473.js");

function p() {
  let [e, t] = Chunk647438.useState(""), n = (0, Chunk442837.e7)([Chunk389458.Z], () => Chunk389458.Z.getAllWordsSorted().map((e, t) => {
    let [n, a] = e;
    return {
      word: n,
      count: a,
      value: a,
      idx: t
    }
  }), [], Chunk442837.pF), r = Chunk647438.useMemo(() => 0 === module.length ? require : require.filter(t => {
    let {
      word: n
    } = t;
    return n.toLowerCase().startsWith(e.toLowerCase())
  }), [require, module]), p = Chunk647438.useCallback(() => {
    Chunk570140.Z.dispatch({
      type: "DEV_TOOLS_WORD_FREQUENCY_RESET"
    })
  }, []);
  return (0, Chunk951288.jsxs)("div", {
    className: l()(Chunk451429.panel, Chunk603473.panel),
    children: [require.length > 0 && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsxs)(Chunk481060.Text, {
        variant: "text-md/semibold",
        className: Chunk603473.sectionTitle,
        children: ["Word Frequencies (", Chunk120356.length, " unique words)"]
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        children: "This is a list of the most common short words found in messages sent and received by this client. They're ignored by the mention suggestions experiment to avoid distracting suggestions. These statistics are stored locally only."
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk603473.headerSection,
        children: [(0, Chunk951288.jsx)(Chunk481060.E1j, {
          size: "sm",
          query: module,
          onChange: exports,
          onClear: () => exports(""),
          placeholder: "Filter by words starting with..."
        }), (0, Chunk951288.jsx)(Chunk481060.Button, {
          variant: "secondary",
          size: "sm",
          text: "Clear Statistics",
          onClick: p
        })]
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk603473.resultsSection,
        children: (0, Chunk951288.jsx)(Chunk481060.zJl, {
          className: Chunk603473.resultsContainer,
          children: (0, Chunk951288.jsxs)("div", {
            className: Chunk603473.resultsTable,
            children: [(0, Chunk951288.jsxs)("div", {
              className: l()(Chunk451429.tableHeader, Chunk603473.tableHeader),
              children: [(0, Chunk951288.jsx)("div", {
                className: Chunk603473.indexColumn,
                children: "Index"
              }), (0, Chunk951288.jsx)("div", {
                className: Chunk603473.wordColumn,
                children: "Word"
              }), (0, Chunk951288.jsx)("div", {
                className: Chunk603473.valueColumn,
                children: "Count"
              })]
            }), Chunk120356.map(e => {
              let {
                word: t,
                value: n,
                idx: i
              } = e;
              return (0, a.jsxs)("div", {
                className: l()(u.tableRow, m.tableRow),
                children: [(0, a.jsx)("div", {
                  className: m.indexColumn,
                  children: (0, a.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    children: i + 1
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
              }, "".concat(t, "-").concat(i))
            })]
          })
        })
      })]
    }), 0 === require.length && (0, Chunk951288.jsx)("div", {
      className: Chunk603473.emptyState,
      children: (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: "Load messages in a channel to see word frequency analysis."
      })
    }), require.length > 0 && 0 === Chunk120356.length && module.length > 0 && (0, Chunk951288.jsx)("div", {
      className: Chunk603473.emptyState,
      children: (0, Chunk951288.jsxs)(Chunk481060.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: ['No words found starting with "', module, '".']
      })
    })]
  })
}