/** Chunk was on 27759 **/
/** chunk id: 555570, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk298990 = require("./298990.js"),
  Chunk966327 = require("./966327.jsx"),
  Chunk629357 = require("./629357.js"),
  Chunk47167 = require("./47167.js"),
  Chunk598104 = require("./598104.jsx"),
  Chunk255266 = require("./255266.jsx"),
  Chunk72563 = require("./72563.js"),
  Chunk921955 = require("./921955.js"),
  Chunk71393 = require("./71393.js"),
  Chunk994500 = require("./994500.js"),
  Chunk203982 = require("./203982.js"),
  Chunk427262 = require("./427262.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk129348 = require("./129348.js");
let N = e => {
    let {
      channel: t,
      guildName: r
    } = e, s = (0, i.bG)([g.A], () => g.A.getGuild(t.guild_id)), l = (0, o.Ay)(t);
    return (0, n.jsxs)("div", {
      className: A.Ke,
      children: [(0, n.jsx)(m.A, {
        size: m.q.SMALL_32,
        guild: s,
        channel: t
      }), (0, n.jsxs)("div", {
        className: A.D6,
        children: [(0, n.jsx)(a.Text, {
          variant: "text-md/medium",
          children: l
        }), (0, n.jsx)(a.Text, {
          variant: "text-xs/normal",
          children: r
        })]
      })]
    })
  },
  T = e => {
    let {
      channel: t
    } = e, r = (0, o.Ay)(t), s = (0, f.i)(t);
    return (0, n.jsxs)("div", {
      className: A.Ke,
      children: [(0, n.jsx)(h.A, {
        "aria-hidden": true,
        size: a._3J.SIZE_32,
        channel: t
      }), (0, n.jsxs)("div", {
        className: A.D6,
        children: [(0, n.jsx)(a.Text, {
          variant: "text-md/medium",
          children: r
        }), (0, n.jsx)(a.Text, {
          variant: "text-xs/normal",
          children: s
        })]
      })]
    })
  },
  S = e => {
    let {
      user: t,
      status: r
    } = e, s = (0, i.bG)([_.A], () => _.A.getNickname(t.id)), l = p.Ay.useName(t), u = p.Ay.useUserTag(t);
    return (0, n.jsxs)("div", {
      className: A.Ke,
      children: [(0, n.jsx)(c.A, {
        "aria-hidden": true,
        size: a._3J.SIZE_32,
        user: t,
        status: r
      }), (0, n.jsxs)("div", {
        className: A.D6,
        children: [(0, n.jsx)(a.Text, {
          variant: "text-md/medium",
          children: null != s ? s : l
        }), (0, n.jsx)(a.Text, {
          variant: "text-xs/normal",
          children: u
        })]
      })]
    })
  };
class P extends Chunk64700.Component {
  render() {
    let e, t, {
      result: r,
      sending: s
    } = this.props;
    switch (r.type) {
      case d.rD.GROUP_DM:
        e = (0, n.jsx)(T, {
          channel: r.data.record
        });
        break;
      case d.rD.TEXT_CHANNEL: {
        let {
          categoryName: t,
          guildName: s
        } = r;
        e = (0, n.jsx)(N, {
          channel: r.data.record,
          categoryName: t,
          guildName: s
        });
        break
      }
      case d.rD.USER: {
        let {
          data: {
            comparator: t,
            record: s
          },
          status: l
        } = r;
        e = (0, n.jsx)(S, {
          comparator: t,
          user: s,
          status: l
        })
      }
    }
    return t = r.sent ? (0, n.jsx)(a.Button, {
      variant: "secondary",
      text: b.intl.string(b.t.i6A1Xw),
      size: "sm",
      disabled: true
    }) : (0, n.jsx)(a.Button, {
      variant: "secondary",
      text: b.intl.string(b.t["6F9ivu"]),
      size: "sm",
      loading: s
    }), (0, n.jsxs)(a.DUT, {
      className: A.Nn,
      onClick: this.handleClick,
      children: [e, t]
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

function y(e) {
  let {
    transitionState: t,
    onClose: r
  } = e, {
    results: c,
    query: o,
    activity: h
  } = (0, i.cf)([x.A], () => ({
    results: x.A.getResults(),
    query: x.A.getQuery(),
    activity: x.A.getActivity()
  }), []), [m, f] = s.useState(o), [g, _] = s.useState([]), [p, N] = s.useState(false), T = s.useRef(null), S = s.useCallback(() => {
    var e;
    null == (e = T.current) || e.scrollPageUp({
      animate: true
    })
  }, [T]), y = s.useCallback(() => {
    var e;
    null == (e = T.current) || e.scrollPageDown({
      animate: true
    })
  }, [T]);
  s.useEffect(() => (j._.subscribe(v.jej.SCROLL_PAGE_UP, S), () => {
    j._.unsubscribe(v.jej.SCROLL_PAGE_UP, S)
  }), [S]), s.useEffect(() => (j._.subscribe(v.jej.SCROLL_PAGE_DOWN, y), () => {
    j._.unsubscribe(v.jej.SCROLL_PAGE_DOWN, y)
  }), [y]), s.useEffect(() => {
    null == h && r()
  }, [r, h]), s.useEffect(() => {
    var e;
    null == (e = T.current) || e.scrollToTop()
  }, [T, c]);
  let C = s.useCallback(e => {
      let {
        data: t,
        data: {
          record: {
            id: r
          }
        }
      } = c[e];
      if (!(null == r || g.includes(r))) switch (_([...g, r]), t.type) {
        case d.rD.GROUP_DM:
        case d.rD.TEXT_CHANNEL:
          (0, u.b4)(t.record.id);
          break;
        case d.rD.USER:
          (0, u.Jb)(t.record.id)
      }
    }, [c, g]),
    D = e => {
      f(e), (0, u.oR)(e)
    };
  return null == h ? null : (0, n.jsx)(l.Modal, {
    transitionState: t,
    title: b.intl.formatToPlainString(b.t["2tN7ih"], {
      name: h.name
    }),
    onClose: r,
    actions: [],
    input: (0, n.jsx)(a.IWV, {
      query: m,
      onChange: D,
      placeholder: b.intl.string(b.t["5h0QOP"]),
      autoFocus: true,
      onClear: () => {
        D("")
      }
    }),
    size: "md",
    "aria-label": b.intl.formatToPlainString(b.t["2tN7ih"], {
      name: h.name
    }),
    listProps: c.length > 0 ? {
      ref: T,
      paddingBottom: 12,
      sections: [c.length],
      sectionHeight: 0,
      renderSection: v.FXj,
      rowHeight: (e, t) => e > 0 ? 0 : 48 * (null != c[t]),
      renderRow: e => {
        let {
          section: t,
          row: r
        } = e;
        if (t > 0) return null;
        let s = c[r];
        return null == s ? null : (0, n.jsx)(P, {
          row: r,
          result: s,
          sending: null != s.data.record.id && g.includes(s.data.record.id),
          onInvite: C
        }, s.data.record.id)
      },
      onScroll: e => {
        let t = e.currentTarget.scrollTop > 0;
        p !== t && N(t)
      }
    } : true,
    children: 0 === c.length && (0, n.jsx)("div", {
      className: A.wV
    })
  })
}