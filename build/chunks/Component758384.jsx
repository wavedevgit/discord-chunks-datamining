/** Chunk was on 81890 **/
/** chunk id: 758384, original params: e,t,a (module,exports,require) **/
let n, l;
require.d(exports, {
  A: () => h
}), require("./896048.js"), require("./733351.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk846293 = require("./846293.js"),
  Chunk198982 = require("./198982.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk4274 = require("./4274.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk988763 = require("./988763.js");
let N = (n = window.GLOBAL_ENV.INVITE_HOST, l = "", null == n && (n = location.host, l = Chunk652215.BVt.INVITE("")), "".concat(location.protocol, "//").concat(n).concat(l, "/"));

function h(e) {
  let {
    onBack: t,
    onComplete: a,
    onConnect: n,
    isSlideReady: l
  } = e, [h, x] = s.useState(""), [A, T] = s.useState(false), [y, j] = s.useState(null), O = s.useRef(null);
  s.useEffect(() => {
    var e;
    l && (null == (e = O.current) || e.focus())
  }, [l]);
  let g = s.useCallback(e => {
    e.preventDefault();
    let t = h.trim();
    if ("" === t) return void j(p.intl.string(p.t.IRq5ah));
    j(null), T(true);
    let n = t.split("/"),
      l = n[n.length - 1];
    o.Ay.resolveInvite(l, "Join Guild", {
      inputValue: t
    }).then(e => {
      let {
        invite: t
      } = e;
      if (T(false), null == t) return void j(p.intl.string(p.t["GEYI+Z"]));
      if (null != t.channel) {
        let e = o.Ay.getInviteContext("Join Guild", t);
        o.Ay.acceptInvite({
          inviteKey: t.code,
          context: e,
          callback: e => {
            a(), o.Ay.transitionToInvite(e)
          }
        }).catch(e => {
          e instanceof d.Wl || e instanceof d.LG ? j((0, _.s)(e.code)) : j(p.intl.string(p.t.dDZRdy))
        })
      }
    }, e => {
      T(false);
      let t = new d.Wl(e);
      j((0, _.s)(t.code))
    })
  }, [h, T, j, a]);
  return {
    content: (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsxs)(c.rQ0, {
        "data-migration-pending": true,
        className: E.wx,
        direction: u.A.Direction.VERTICAL,
        separator: false,
        children: [(0, i.jsx)(c.Heading, {
          variant: "heading-xl/bold",
          color: "text-strong",
          className: E.DD,
          children: p.intl.string(p.t.riOUtB)
        }), (0, i.jsx)(c.Text, {
          variant: "text-md/normal",
          color: "text-default",
          children: p.intl.string(p.t["7jub2t"])
        })]
      }), (0, i.jsxs)(c.$mQ, {
        "data-migration-pending": true,
        children: [(0, i.jsx)("form", {
          onSubmit: g,
          className: E.$j,
          children: (0, i.jsx)(c.ksK, {
            label: p.intl.string(p.t.qreV25),
            error: y,
            value: h,
            onChange: x,
            inputRef: O
          })
        }), (0, i.jsx)(c.Text, {
          color: "text-default",
          variant: "text-xs/normal",
          children: p.intl.format(p.t.lHTZl2, {
            examples: "".concat(N).concat("wumpus-friends", ", ").concat("hTKzmak")
          })
        }), (0, i.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "text-default",
          className: E.LR,
          children: p.intl.format(p.t["8F/who"], {
            onClick: () => {
              n(), (0, b.openUserSettings)(f.X.CONNECTIONS_PANEL, {
                section: m.nc_.CONNECTIONS
              })
            }
          })
        })]
      })]
    }),
    footer: (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(c.Button, {
        variant: "primary",
        text: p.intl.string(p.t.VJlc0S),
        onClick: g,
        disabled: 0 === h.length,
        loading: A
      }), (0, i.jsx)(r.$n, {
        "data-migration-pending": true,
        className: E.__invalid_skipButton,
        look: r.$n.Looks.BLANK,
        size: r.$n.Sizes.MIN,
        onClick: t,
        children: p.intl.string(p.t["13/7kX"])
      })]
    })
  }
}