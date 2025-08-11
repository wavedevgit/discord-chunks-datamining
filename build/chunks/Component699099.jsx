/** Chunk was on 95463 **/
/** chunk id: 699099, original params: e,s,t (module,exports,require) **/
require.d(exports, {
  default: () => T
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  n = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk24124 = require("./24124.js"),
  Chunk794433 = require("./794433.jsx"),
  Chunk622822 = require("./622822.js"),
  Chunk212819 = require("./212819.js"),
  Chunk43267 = require("./43267.js"),
  Chunk447003 = require("./447003.js"),
  Chunk933557 = require("./933557.js"),
  Chunk606206 = require("./606206.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk585483 = require("./585483.js"),
  Chunk5192 = require("./5192.js"),
  Chunk51144 = require("./51144.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk944801 = require("./944801.js"),
  Chunk20493 = require("./20493.js");

function f(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[s] = t, e
}
let R = e => {
    let {
      channel: s,
      categoryName: t,
      guildName: r
    } = e, a = i.VL1;
    return (0, x.Z)(s) ? a = i.W4G : (0, h.aC)(s) && (a = i.z0B), (0, l.jsxs)("div", {
      className: k.result,
      children: [(0, l.jsx)(a, {
        className: k.resultIcon,
        colorClass: k.resultIconBackground,
        size: "xs"
      }), (0, l.jsxs)("div", {
        className: k.resultText,
        children: [(0, l.jsx)("span", {
          children: s.name
        }), (0, l.jsx)("span", {
          className: k.resultCategoryName,
          children: t
        })]
      }), (0, l.jsx)("div", {
        className: k.resultGuildName,
        children: r
      })]
    })
  },
  z = e => {
    let {
      channel: s
    } = e, t = (0, p.ZP)(s);
    return (0, l.jsxs)("div", {
      className: k.result,
      children: [(0, l.jsx)(i.qEK, {
        src: (0, _.x)(s),
        "aria-label": null != t ? t : "",
        className: k.resultAvatar,
        size: i.EFr.SIZE_32
      }), (0, l.jsx)("div", {
        className: k.resultText,
        children: t
      })]
    })
  },
  A = e => {
    let {
      user: s,
      status: t
    } = e, r = (0, u.e7)([C.Z, g.Z], () => {
      var e;
      let s = null != (e = C.Z.getVoiceChannelId()) ? e : C.Z.getChannelId();
      return null == s ? null : g.Z.getChannel(s)
    }), a = null == r ? true : r.guild_id, n = null == r ? true : r.id, c = S.ZP.useName(a, n, s), o = E.ZP.useName(s);
    return (0, l.jsxs)("div", {
      className: k.result,
      children: [(0, l.jsx)(i.qEK, {
        src: s.getAvatarURL(true, 32),
        "aria-label": s.username,
        className: k.resultAvatar,
        size: i.EFr.SIZE_32,
        status: t
      }), (0, l.jsxs)("div", {
        className: k.resultText,
        children: [(0, l.jsx)("span", {
          children: c
        }), (0, l.jsx)("span", {
          className: k.resultUsername,
          children: o
        })]
      })]
    })
  };
class I extends Chunk73800.Component {
  render() {
    let e, s, {
      result: t,
      selected: r,
      sending: a
    } = this.props;
    switch (require.type) {
      case Chunk212819.h8.GROUP_DM:
        e = (0, Chunk255367.jsx)(z, {
          channel: require.data.record
        });
        break;
      case Chunk212819.h8.TEXT_CHANNEL: {
        let {
          categoryName: s,
          guildName: r
        } = require;
        e = (0, Chunk255367.jsx)(R, {
          channel: require.data.record,
          categoryName: exports,
          guildName: Chunk73800
        });
        break
      }
      case Chunk212819.h8.USER: {
        let {
          data: {
            comparator: s,
            record: r
          },
          status: a
        } = require;
        e = (0, Chunk255367.jsx)(A, {
          comparator: exports,
          user: Chunk73800,
          status: Chunk120356
        })
      }
    }
    return s = require.sent ? (0, Chunk255367.jsx)(Chunk755721.zx, {
      className: Chunk944801.inviteButton,
      look: Chunk755721.zx.Looks.LINK,
      size: Chunk755721.zx.Sizes.SMALL,
      disabled: true,
      color: Chunk755721.zx.Colors.WHITE,
      children: Chunk388032.intl.string(Chunk388032.t.i6A1X1)
    }) : (0, Chunk255367.jsx)(Chunk755721.zx, {
      color: Chunk755721.zx.Colors.GREEN,
      look: Chunk73800 ? Chunk755721.zx.Looks.FILLED : Chunk755721.zx.Looks.OUTLINED,
      className: Chunk944801.inviteButton,
      size: Chunk755721.zx.Sizes.SMALL,
      submitting: Chunk120356,
      children: Chunk388032.intl.string(Chunk388032.t["6F9ivr"])
    }), (0, Chunk255367.jsxs)(Chunk481060.P3F, {
      className: n()(Chunk944801.resultWrapper, {
        [Chunk944801.resultWrapperSelected]: Chunk73800
      }),
      onMouseEnter: this.handleMouseEnter,
      onClick: this.handleClick,
      children: [module, exports]
    })
  }
  constructor(...e) {
    super(...e), f(this, "handleClick", () => {
      let {
        onInvite: e,
        row: s
      } = this.props;
      e(s)
    }), f(this, "handleMouseEnter", () => {
      let {
        onMouseEnter: e,
        row: s
      } = this.props;
      e(s)
    })
  }
}

function T(e) {
  let {
    transitionState: s,
    onClose: t
  } = e, {
    results: a,
    query: n,
    activity: c
  } = (0, u.cj)([N.Z], () => ({
    results: N.Z.getResults(),
    query: N.Z.getQuery(),
    activity: N.Z.getActivity()
  }), []), [h, _] = r.useState(n), [x, p] = r.useState(0), [g, C] = r.useState([]), [S, E] = r.useState(false), f = r.useRef(null), R = r.useCallback(() => {
    var e;
    null == (e = f.current) || e.scrollPageUp({
      animate: true
    })
  }, [f]), z = r.useCallback(() => {
    var e;
    null == (e = f.current) || e.scrollPageDown({
      animate: true
    })
  }, [f]);
  r.useEffect(() => (v.S.subscribe(j.CkL.SCROLL_PAGE_UP, R), () => {
    v.S.unsubscribe(j.CkL.SCROLL_PAGE_UP, R)
  }), [R]), r.useEffect(() => (v.S.subscribe(j.CkL.SCROLL_PAGE_DOWN, z), () => {
    v.S.unsubscribe(j.CkL.SCROLL_PAGE_DOWN, z)
  }), [z]), r.useEffect(() => {
    null == c && t()
  }, [t, c]), r.useEffect(() => {
    var e;
    null == (e = f.current) || e.scrollToTop(), p(0)
  }, [f, a]);
  let A = r.useCallback(e => {
      let {
        data: s,
        data: {
          record: {
            id: t
          }
        }
      } = a[e];
      if (!(null == t || g.includes(t))) switch (C([...g, t]), s.type) {
        case m.h8.GROUP_DM:
        case m.h8.TEXT_CHANNEL:
          (0, o.GG)(s.record.id);
          break;
        case m.h8.USER:
          (0, o.R2)(s.record.id)
      }
    }, [a, g]),
    T = r.useCallback(e => {
      p(e)
    }, [p]),
    Z = () => {
      P("")
    },
    P = e => {
      _(e), (0, o.rh)(e)
    };
  return null == c ? null : (0, l.jsxs)(i.Y0X, {
    transitionState: s,
    size: i.CgR.SMALL,
    "aria-label": L.intl.formatToPlainString(L.t["2tN7io"], {
      name: c.name
    }),
    parentComponent: "ActivityInviteModal",
    children: [(0, l.jsxs)(i.xBx, {
      separator: S,
      className: k.modalHeader,
      children: [(0, l.jsx)(i.olH, {
        className: k.closeButton,
        onClick: t
      }), (0, l.jsxs)("div", {
        className: k.header,
        children: [(0, l.jsx)(i.vwX, {
          tag: "h2",
          className: b.marginBottom8,
          children: L.intl.format(L.t["2tN7io"], {
            name: c.name
          })
        }), (0, l.jsx)(d.Z, {
          size: d.Z.Sizes.MEDIUM,
          query: h,
          selectedSection: 0,
          selectedRow: x,
          sections: [a.length],
          className: b.marginTop4,
          onSelect: (e, s) => {
            null == s ? Z() : A(s)
          },
          onSelectionChange: (e, s) => {
            var t;
            p(s), null == (t = f.current) || t.scrollIntoViewRect({
              start: 48 * s,
              end: 48 * s + 48
            })
          },
          onQueryChange: P,
          placeholder: L.intl.string(L.t.IJExws),
          autoFocus: true,
          onClear: Z
        })]
      })]
    }), (0, l.jsx)(i.YAO, {
      scrollerRef: f,
      className: 0 === a.length ? k.noResults : k.results,
      paddingBottom: 12,
      sections: [a.length],
      sectionHeight: 0,
      renderSection: j.VqG,
      rowHeight: (e, s) => e > 0 ? 0 : 48 * (null != a[s]),
      renderRow: e => {
        let {
          section: s,
          row: t
        } = e;
        if (s > 0) return null;
        let r = a[t];
        return null == r ? null : (0, l.jsx)(I, {
          row: t,
          result: r,
          sending: null != r.data.record.id && g.includes(r.data.record.id),
          selected: t === x,
          onMouseEnter: T,
          onInvite: A
        }, r.data.record.id)
      },
      onScroll: e => {
        let s = e.currentTarget.scrollTop > 0;
        S !== s && E(s)
      }
    })]
  })
}