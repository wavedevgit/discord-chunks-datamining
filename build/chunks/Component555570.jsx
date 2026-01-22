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
    } = e, a = (0, i.bG)([g.A], () => g.A.getGuild(t.guild_id)), s = (0, o.Ay)(t);
    return (0, n.jsxs)("div", {
      className: A.Ke,
      children: [(0, n.jsx)(m.A, {
        size: m.q.SMALL_32,
        guild: a,
        channel: t
      }), (0, n.jsxs)("div", {
        className: A.D6,
        children: [(0, n.jsx)(l.Text, {
          variant: "text-md/medium",
          children: s
        }), (0, n.jsx)(l.Text, {
          variant: "text-xs/normal",
          children: r
        })]
      })]
    })
  },
  T = e => {
    let {
      channel: t
    } = e, r = (0, o.Ay)(t), a = (0, x.i)(t);
    return (0, n.jsxs)("div", {
      className: A.Ke,
      children: [(0, n.jsx)(h.A, {
        "aria-hidden": true,
        size: l._3J.SIZE_32,
        channel: t
      }), (0, n.jsxs)("div", {
        className: A.D6,
        children: [(0, n.jsx)(l.Text, {
          variant: "text-md/medium",
          children: r
        }), (0, n.jsx)(l.Text, {
          variant: "text-xs/normal",
          children: a
        })]
      })]
    })
  },
  S = e => {
    let {
      user: t,
      status: r
    } = e, a = (0, i.bG)([b.A], () => b.A.getNickname(t.id)), s = p.Ay.useName(t), c = p.Ay.useUserTag(t);
    return (0, n.jsxs)("div", {
      className: A.Ke,
      children: [(0, n.jsx)(u.A, {
        "aria-hidden": true,
        size: l._3J.SIZE_32,
        user: t,
        status: r
      }), (0, n.jsxs)("div", {
        className: A.D6,
        children: [(0, n.jsx)(l.Text, {
          variant: "text-md/medium",
          children: null != a ? a : s
        }), (0, n.jsx)(l.Text, {
          variant: "text-xs/normal",
          children: c
        })]
      })]
    })
  };
class P extends Chunk64700.Component {
  render() {
    let e, t, {
      result: r,
      sending: a
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
          guildName: a
        } = r;
        e = (0, n.jsx)(N, {
          channel: r.data.record,
          categoryName: t,
          guildName: a
        });
        break
      }
      case d.rD.USER: {
        let {
          data: {
            comparator: t,
            record: a
          },
          status: s
        } = r;
        e = (0, n.jsx)(S, {
          comparator: t,
          user: a,
          status: s
        })
      }
    }
    return t = r.sent ? (0, n.jsx)(l.Button, {
      variant: "secondary",
      text: v.intl.string(v.t.i6A1Xw),
      size: "sm",
      disabled: true
    }) : (0, n.jsx)(l.Button, {
      variant: "secondary",
      text: v.intl.string(v.t["6F9ivu"]),
      size: "sm",
      loading: a
    }), (0, n.jsxs)(l.DUT, {
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
    results: u,
    query: o,
    activity: h
  } = (0, i.cf)([f.A], () => ({
    results: f.A.getResults(),
    query: f.A.getQuery(),
    activity: f.A.getActivity()
  }), []), [m, x] = a.useState(o), [g, b] = a.useState([]), [p, N] = a.useState(false), T = a.useRef(null), S = a.useCallback(() => {
    var e;
    null == (e = T.current) || e.scrollPageUp({
      animate: true
    })
  }, [T]), y = a.useCallback(() => {
    var e;
    null == (e = T.current) || e.scrollPageDown({
      animate: true
    })
  }, [T]);
  a.useEffect(() => (j._.subscribe(_.jej.SCROLL_PAGE_UP, S), () => {
    j._.unsubscribe(_.jej.SCROLL_PAGE_UP, S)
  }), [S]), a.useEffect(() => (j._.subscribe(_.jej.SCROLL_PAGE_DOWN, y), () => {
    j._.unsubscribe(_.jej.SCROLL_PAGE_DOWN, y)
  }), [y]), a.useEffect(() => {
    null == h && r()
  }, [r, h]), a.useEffect(() => {
    var e;
    null == (e = T.current) || e.scrollToTop()
  }, [T, u]);
  let C = a.useCallback(e => {
      let {
        data: t,
        data: {
          record: {
            id: r
          }
        }
      } = u[e];
      if (!(null == r || g.includes(r))) switch (b([...g, r]), t.type) {
        case d.rD.GROUP_DM:
        case d.rD.TEXT_CHANNEL:
          (0, c.b4)(t.record.id);
          break;
        case d.rD.USER:
          (0, c.Jb)(t.record.id)
      }
    }, [u, g]),
    D = e => {
      x(e), (0, c.oR)(e)
    };
  return null == h ? null : (0, n.jsx)(s.Modal, {
    transitionState: t,
    title: v.intl.formatToPlainString(v.t["2tN7ih"], {
      name: h.name
    }),
    onClose: r,
    actions: [],
    input: (0, n.jsx)(l.IWV, {
      query: m,
      onChange: D,
      placeholder: v.intl.string(v.t["5h0QOP"]),
      autoFocus: true,
      onClear: () => {
        D("")
      }
    }),
    size: "md",
    "aria-label": v.intl.formatToPlainString(v.t["2tN7ih"], {
      name: h.name
    }),
    listProps: u.length > 0 ? {
      ref: T,
      paddingBottom: 12,
      sections: [u.length],
      sectionHeight: 0,
      renderSection: _.FXj,
      rowHeight: (e, t) => e > 0 ? 0 : 48 * (null != u[t]),
      renderRow: e => {
        let {
          section: t,
          row: r
        } = e;
        if (t > 0) return null;
        let a = u[r];
        return null == a ? null : (0, n.jsx)(P, {
          row: r,
          result: a,
          sending: null != a.data.record.id && g.includes(a.data.record.id),
          onInvite: C
        }, a.data.record.id)
      },
      onScroll: e => {
        let t = e.currentTarget.scrollTop > 0;
        p !== t && N(t)
      }
    } : true,
    children: 0 === u.length && (0, n.jsx)("div", {
      className: A.wV
    })
  })
}