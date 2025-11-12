/** Chunk was on 5598 **/
/** chunk id: 621566, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk24124 = require("./24124.js"),
  Chunk700582 = require("./700582.jsx"),
  Chunk212819 = require("./212819.js"),
  Chunk933557 = require("./933557.js"),
  Chunk266076 = require("./266076.jsx"),
  Chunk810123 = require("./810123.jsx"),
  Chunk448486 = require("./448486.js"),
  Chunk606206 = require("./606206.js"),
  Chunk430824 = require("./430824.js"),
  Chunk699516 = require("./699516.js"),
  Chunk585483 = require("./585483.js"),
  Chunk51144 = require("./51144.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk559577 = require("./559577.js");
let S = e => {
    let {
      channel: t,
      guildName: r
    } = e, l = (0, a.e7)([g.Z], () => g.Z.getGuild(t.guild_id)), n = (0, o.ZP)(t);
    return (0, s.jsxs)("div", {
      className: P.result,
      children: [(0, s.jsx)(m.Z, {
        size: m.E.SMALL_32,
        guild: l,
        channel: t
      }), (0, s.jsxs)("div", {
        className: P.resultText,
        children: [(0, s.jsx)(i.Text, {
          variant: "text-md/medium",
          children: n
        }), (0, s.jsx)(i.Text, {
          variant: "text-xs/normal",
          children: r
        })]
      })]
    })
  },
  b = e => {
    let {
      channel: t
    } = e, r = (0, o.ZP)(t), l = (0, x._)(t);
    return (0, s.jsxs)("div", {
      className: P.result,
      children: [(0, s.jsx)(h.Z, {
        "aria-hidden": true,
        size: i.EFr.SIZE_32,
        channel: t
      }), (0, s.jsxs)("div", {
        className: P.resultText,
        children: [(0, s.jsx)(i.Text, {
          variant: "text-md/medium",
          children: r
        }), (0, s.jsx)(i.Text, {
          variant: "text-xs/normal",
          children: l
        })]
      })]
    })
  },
  C = e => {
    let {
      user: t,
      status: r
    } = e, l = (0, a.e7)([p.Z], () => p.Z.getNickname(t.id)), n = j.ZP.useName(t), u = j.ZP.useUserTag(t);
    return (0, s.jsxs)("div", {
      className: P.result,
      children: [(0, s.jsx)(c.Z, {
        "aria-hidden": true,
        size: i.EFr.SIZE_32,
        user: t,
        status: r
      }), (0, s.jsxs)("div", {
        className: P.resultText,
        children: [(0, s.jsx)(i.Text, {
          variant: "text-md/medium",
          children: null != l ? l : n
        }), (0, s.jsx)(i.Text, {
          variant: "text-xs/normal",
          children: u
        })]
      })]
    })
  };
class N extends Chunk647438.Component {
  render() {
    let e, t, {
      result: r,
      sending: l
    } = this.props;
    switch (require.type) {
      case Chunk212819.h8.GROUP_DM:
        e = (0, Chunk951288.jsx)(b, {
          channel: require.data.record
        });
        break;
      case Chunk212819.h8.TEXT_CHANNEL: {
        let {
          categoryName: t,
          guildName: l
        } = require;
        e = (0, Chunk951288.jsx)(S, {
          channel: require.data.record,
          categoryName: exports,
          guildName: Chunk647438
        });
        break
      }
      case Chunk212819.h8.USER: {
        let {
          data: {
            comparator: t,
            record: l
          },
          status: n
        } = require;
        e = (0, Chunk951288.jsx)(C, {
          comparator: exports,
          user: Chunk647438,
          status: Chunk793030
        })
      }
    }
    return t = require.sent ? (0, Chunk951288.jsx)(Chunk481060.Button, {
      variant: "secondary",
      text: Chunk388032.intl.string(Chunk388032.t.i6A1Xw),
      size: "sm",
      disabled: true
    }) : (0, Chunk951288.jsx)(Chunk481060.Button, {
      variant: "secondary",
      text: Chunk388032.intl.string(Chunk388032.t["6F9ivu"]),
      size: "sm",
      loading: Chunk647438
    }), (0, Chunk951288.jsxs)(Chunk481060.P3F, {
      className: Chunk559577.resultWrapper,
      onClick: this.handleClick,
      children: [module, exports]
    })
  }
  constructor(...e) {
    super(...e),
      function(e, t, r) {
        t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      }(this, "handleClick", () => {
        let {
          onInvite: e,
          row: t
        } = this.props;
        e(t)
      })
  }
}

function E(e) {
  let {
    transitionState: t,
    onClose: r
  } = e, {
    results: c,
    query: o,
    activity: h
  } = (0, a.cj)([f.Z], () => ({
    results: f.Z.getResults(),
    query: f.Z.getQuery(),
    activity: f.Z.getActivity()
  }), []), [m, x] = l.useState(o), [g, p] = l.useState([]), [j, S] = l.useState(false), b = l.useRef(null), C = l.useCallback(() => {
    var e;
    null == (e = b.current) || e.scrollPageUp({
      animate: true
    })
  }, [b]), E = l.useCallback(() => {
    var e;
    null == (e = b.current) || e.scrollPageDown({
      animate: true
    })
  }, [b]);
  l.useEffect(() => (_.S.subscribe(v.CkL.SCROLL_PAGE_UP, C), () => {
    _.S.unsubscribe(v.CkL.SCROLL_PAGE_UP, C)
  }), [C]), l.useEffect(() => (_.S.subscribe(v.CkL.SCROLL_PAGE_DOWN, E), () => {
    _.S.unsubscribe(v.CkL.SCROLL_PAGE_DOWN, E)
  }), [E]), l.useEffect(() => {
    null == h && r()
  }, [r, h]), l.useEffect(() => {
    var e;
    null == (e = b.current) || e.scrollToTop()
  }, [b, c]);
  let k = l.useCallback(e => {
      let {
        data: t,
        data: {
          record: {
            id: r
          }
        }
      } = c[e];
      if (!(null == r || g.includes(r))) switch (p([...g, r]), t.type) {
        case d.h8.GROUP_DM:
        case d.h8.TEXT_CHANNEL:
          (0, u.GG)(t.record.id);
          break;
        case d.h8.USER:
          (0, u.R2)(t.record.id)
      }
    }, [c, g]),
    Z = e => {
      x(e), (0, u.rh)(e)
    };
  return null == h ? null : (0, s.jsx)(n.Modal, {
    transitionState: t,
    title: T.intl.formatToPlainString(T.t["2tN7ih"], {
      name: h.name
    }),
    onClose: r,
    actions: [],
    input: (0, s.jsx)(i.E1j, {
      query: m,
      onChange: Z,
      placeholder: T.intl.string(T.t["5h0QOP"]),
      autoFocus: true,
      onClear: () => {
        Z("")
      }
    }),
    size: "md",
    "aria-label": T.intl.formatToPlainString(T.t["2tN7ih"], {
      name: h.name
    }),
    children: (0, s.jsx)(i.YAO, {
      scrollerRef: b,
      className: 0 === c.length ? P.noResults : P.results,
      paddingBottom: 12,
      sections: [c.length],
      sectionHeight: 0,
      renderSection: v.VqG,
      rowHeight: (e, t) => e > 0 ? 0 : 48 * (null != c[t]),
      renderRow: e => {
        let {
          section: t,
          row: r
        } = e;
        if (t > 0) return null;
        let l = c[r];
        return null == l ? null : (0, s.jsx)(N, {
          row: r,
          result: l,
          sending: null != l.data.record.id && g.includes(l.data.record.id),
          onInvite: k
        }, l.data.record.id)
      },
      onScroll: e => {
        let t = e.currentTarget.scrollTop > 0;
        j !== t && S(t)
      }
    })
  })
}