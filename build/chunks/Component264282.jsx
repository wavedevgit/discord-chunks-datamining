/** Chunk was on 1272 **/
/** chunk id: 264282, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./642613.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk670362 = require("./670362.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk477813 = require("./477813.js");
let p = ["reward", "task"],
  f = function(e) {
    let {
      onChange: t,
      optionClassName: n,
      selectedFilters: f
    } = e, h = i.useMemo(() => Object.entries((0, l.groupBy)(c.vy, "group")).sort((e, t) => {
      let n = p.indexOf(e[0]),
        r = p.indexOf(t[0]);
      return n < r ? false : +(r < n)
    }).map(e => {
      let [t, n] = e;
      return {
        heading: function(e) {
          switch (e) {
            case "reward":
              return u.intl.string(u.t.vjLqAQ);
            case "task":
              return u.intl.string(u.t.Hufmsr)
          }
        }(t),
        options: n
      }
    }), []);
    return (0, r.jsx)(s.Z, {
      renderPopout: (e, i) => {
        let {
          closePopout: l
        } = e;
        return (0, r.jsxs)("div", {
          children: [h.map((e, l) => (0, r.jsxs)("div", {
            className: d.filterOptionGroup,
            children: [(0, r.jsx)(s.g, {
              id: i,
              children: e.heading
            }), e.options.map((e, i) => (0, r.jsx)(a.$q, {
              className: n,
              innerClassName: d.checkboxInput,
              onChange: n => {
                t(n.currentTarget.checked ? [...f, e] : f.filter(t => t.filter !== e.filter))
              },
              reverse: true,
              type: a.M0.INVERTED,
              value: false !== f.findIndex(t => t.filter === e.filter),
              children: (0, r.jsx)(o.Text, {
                variant: "text-md/normal",
                children: function(e) {
                  switch (e) {
                    case c.XJ.REWARD_VIRTUAL_CURRENCY:
                      return u.intl.string(u.t.ElYQFR);
                    case c.XJ.REWARD_COLLECTIBLE:
                      return u.intl.string(u.t.Jg17Ul);
                    case c.XJ.REWARD_IN_GAME:
                      return u.intl.string(u.t["O/J2kp"]);
                    case c.XJ.TASK_VIDEO:
                      return u.intl.string(u.t.e0iISE);
                    case c.XJ.TASK_PLAY:
                      return u.intl.string(u.t["1nJR4u"])
                  }
                }(e.filter)
              })
            }, i))]
          }, l)), (0, r.jsx)("div", {
            className: d.filterOptionGroup,
            children: (0, r.jsx)(o.zxk, {
              fullWidth: true,
              onClick: () => {
                t([]), l()
              },
              size: "sm",
              text: u.intl.string(u.t.VkKicX),
              variant: "secondary"
            })
          })]
        })
      },
      children: (e, t) => {
        var n, i;
        return (0, r.jsx)(o.zxk, (n = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({}, e), i = i = {
          buttonRef: t,
          size: "sm",
          text: u.intl.formatToPlainString(u.t.CEfkXl, {
            numSelectedFilters: f.length
          }),
          icon: o.gXV,
          iconPosition: "end",
          variant: "secondary"
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
        }), n))
      }
    })
  }