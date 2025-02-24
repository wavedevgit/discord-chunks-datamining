/** Chunk was on 79921 **/
l.d(t, {
  default: () => b
}), l(301563), l(47120);
var r = l(200651),
  s = l(192379),
  n = l(120356),
  a = l.n(n),
  i = l(442837),
  u = l(481060),
  c = l(24124),
  o = l(461745),
  d = l(212819),
  h = l(43267),
  p = l(447003),
  _ = l(933557),
  m = l(606206),
  N = l(585483),
  g = l(981631),
  E = l(388032),
  v = l(939890),
  f = l(455812);

function y(e, t, l) {
  return t in e ? Object.defineProperty(e, t, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = l, e
}
let x = e => {
    let {
      channel: t,
      categoryName: l,
      guildName: s
    } = e, n = u.VL1;
    return (0, p.Z)(t) ? n = u.W4G : t.isNSFW() && (n = u.z0B), (0, r.jsxs)("div", {
      className: v.result,
      children: [(0, r.jsx)(n, {
        className: v.resultIcon,
        colorClass: v.resultIconBackground,
        size: "xs"
      }), (0, r.jsxs)("div", {
        className: v.resultText,
        children: [(0, r.jsx)("span", {
          children: t.name
        }), (0, r.jsx)("span", {
          className: v.resultCategoryName,
          children: l
        })]
      }), (0, r.jsx)("div", {
        className: v.resultGuildName,
        children: s
      })]
    })
  },
  C = e => {
    let {
      channel: t
    } = e, l = (0, _.ZP)(t);
    return (0, r.jsxs)("div", {
      className: v.result,
      children: [(0, r.jsx)(u.qEK, {
        src: (0, h.x)(t),
        "aria-label": null != l ? l : "",
        className: v.resultAvatar,
        size: u.EFr.SIZE_32
      }), (0, r.jsx)("div", {
        className: v.resultText,
        children: l
      })]
    })
  },
  O = e => {
    let t, {
      user: l,
      comparator: s,
      status: n
    } = e;
    if (null != s && s === l.tag) {
      let e = s.split("#");
      e.pop(), t = e.join("#")
    } else t = null != s && "" !== s ? s : l.username;
    return (0, r.jsxs)("div", {
      className: v.result,
      children: [(0, r.jsx)(u.qEK, {
        src: l.getAvatarURL(void 0, 32),
        "aria-label": l.username,
        className: v.resultAvatar,
        size: u.EFr.SIZE_32,
        status: n
      }), (0, r.jsxs)("div", {
        className: v.resultText,
        children: [(0, r.jsx)("span", {
          children: t
        }), (0, r.jsx)("span", {
          className: v.resultUsername,
          children: l.tag
        })]
      })]
    })
  };
class S extends s.Component {
  render() {
    let e, t;
    let {
      result: l,
      selected: s,
      sending: n
    } = this.props;
    switch (l.type) {
      case d.h8.GROUP_DM:
        e = (0, r.jsx)(C, {
          channel: l.data.record
        });
        break;
      case d.h8.TEXT_CHANNEL: {
        let {
          categoryName: t,
          guildName: s
        } = l;
        e = (0, r.jsx)(x, {
          channel: l.data.record,
          categoryName: t,
          guildName: s
        });
        break
      }
      case d.h8.USER: {
        let {
          data: {
            comparator: t,
            record: s
          },
          status: n
        } = l;
        e = (0, r.jsx)(O, {
          comparator: t,
          user: s,
          status: n
        })
      }
    }
    return t = l.sent ? (0, r.jsx)(u.zxk, {
      className: v.inviteButton,
      look: u.zxk.Looks.LINK,
      size: u.zxk.Sizes.SMALL,
      disabled: !0,
      color: u.zxk.Colors.WHITE,
      children: E.NW.string(E.t.i6A1X1)
    }) : (0, r.jsx)(u.zxk, {
      color: u.zxk.Colors.GREEN,
      look: s ? u.zxk.Looks.FILLED : u.zxk.Looks.OUTLINED,
      className: v.inviteButton,
      size: u.zxk.Sizes.SMALL,
      submitting: n,
      onClick: this.handleClick,
      children: E.NW.string(E.t["6F9ivr"])
    }), (0, r.jsxs)("div", {
      className: a()(v.resultWrapper, {
        [v.resultWrapperSelected]: s
      }),
      onMouseEnter: this.handleMouseEnter,
      children: [e, t]
    })
  }
  constructor(...e) {
    super(...e), y(this, "handleClick", () => {
      let {
        onInvite: e,
        row: t
      } = this.props;
      e(t)
    }), y(this, "handleMouseEnter", () => {
      let {
        onMouseEnter: e,
        row: t
      } = this.props;
      e(t)
    })
  }
}

function b(e) {
  let {
    transitionState: t,
    onClose: l
  } = e, {
    results: n,
    query: a,
    activity: h
  } = (0, i.cj)([m.Z], () => ({
    results: m.Z.getResults(),
    query: m.Z.getQuery(),
    activity: m.Z.getActivity()
  }), []), [p, _] = s.useState(a), [y, x] = s.useState(0), [C, O] = s.useState([]), [b, I] = s.useState(!1), j = s.useRef(null), T = s.useCallback(() => {
    var e;
    null === (e = j.current) || void 0 === e || e.scrollPageUp({
      animate: !0
    })
  }, [j]), A = s.useCallback(() => {
    var e;
    null === (e = j.current) || void 0 === e || e.scrollPageDown({
      animate: !0
    })
  }, [j]);
  s.useEffect(() => (N.S.subscribe(g.CkL.SCROLL_PAGE_UP, T), () => {
    N.S.unsubscribe(g.CkL.SCROLL_PAGE_UP, T)
  }), [T]), s.useEffect(() => (N.S.subscribe(g.CkL.SCROLL_PAGE_DOWN, A), () => {
    N.S.unsubscribe(g.CkL.SCROLL_PAGE_DOWN, A)
  }), [A]), s.useEffect(() => {
    null == h && l()
  }, [l, h]), s.useEffect(() => {
    var e;
    null === (e = j.current) || void 0 === e || e.scrollToTop(), x(0)
  }, [j, n]);
  let L = s.useCallback(e => {
      let {
        data: t,
        data: {
          record: {
            id: l
          }
        }
      } = n[e];
      if (!(null == l || C.includes(l))) switch (O([...C, l]), t.type) {
        case d.h8.GROUP_DM:
        case d.h8.TEXT_CHANNEL:
          (0, c.GG)(t.record.id);
          break;
        case d.h8.USER:
          (0, c.R2)(t.record.id)
      }
    }, [n, C]),
    k = s.useCallback(e => {
      x(e)
    }, [x]),
    P = () => {
      R("")
    },
    R = e => {
      _(e), (0, c.rh)(e)
    };
  return null == h ? null : (0, r.jsxs)(u.Y0X, {
    transitionState: t,
    size: u.CgR.SMALL,
    "aria-label": E.NW.formatToPlainString(E.t["2tN7io"], {
      name: h.name
    }),
    children: [(0, r.jsxs)(u.xBx, {
      separator: b,
      children: [(0, r.jsx)(u.olH, {
        className: v.closeButton,
        onClick: l
      }), (0, r.jsxs)("div", {
        className: v.header,
        children: [(0, r.jsx)(u.vwX, {
          tag: "h2",
          className: f.marginBottom8,
          children: E.NW.format(E.t["2tN7io"], {
            name: h.name
          })
        }), (0, r.jsx)(o.ZP, {
          size: o.ZP.Sizes.MEDIUM,
          query: p,
          selectedSection: 0,
          selectedRow: y,
          sections: [n.length],
          className: f.marginTop4,
          onSelect: (e, t) => {
            null == t ? P() : L(t)
          },
          onSelectionChange: (e, t) => {
            var l;
            x(t), null === (l = j.current) || void 0 === l || l.scrollIntoViewRect({
              start: 44 * t,
              end: 44 * t + 44
            })
          },
          onQueryChange: R,
          placeholder: E.NW.string(E.t.IJExws),
          autoFocus: !0,
          onClear: P
        })]
      })]
    }), (0, r.jsx)(u.YAO, {
      scrollerRef: j,
      className: 0 === n.length ? v.noResults : v.results,
      paddingBottom: 8,
      sections: [n.length],
      sectionHeight: 0,
      renderSection: g.VqG,
      rowHeight: (e, t) => e > 0 ? 0 : 44 * (null != n[t]),
      renderRow: e => {
        let {
          section: t,
          row: l
        } = e;
        if (t > 0) return null;
        let s = n[l];
        return null == s ? null : (0, r.jsx)(S, {
          row: l,
          result: s,
          sending: null != s.data.record.id && C.includes(s.data.record.id),
          selected: l === y,
          onMouseEnter: k,
          onInvite: L
        }, s.data.record.id)
      },
      onScroll: e => {
        let t = e.currentTarget.scrollTop > 0;
        b !== t && I(t)
      }
    })]
  })
}