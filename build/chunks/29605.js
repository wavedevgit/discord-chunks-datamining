/** Chunk was on 3205 **/
"use strict";
n.d(t, {
  FT: () => H,
  L3: () => z,
  ZP: () => Y
}), n(47120), n(978209);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(512722),
  o = n.n(l),
  c = n(392711),
  d = n.n(c),
  u = n(772848),
  m = n(442837),
  g = n(481060),
  p = n(668781),
  h = n(80932),
  f = n(225433),
  b = n(327802),
  x = n(110924),
  j = n(200876),
  N = n(730089),
  v = n(372444),
  _ = n(889564),
  O = n(372129),
  y = n(357156),
  C = n(210887),
  I = n(626135),
  E = n(768581),
  S = n(176354),
  T = n(267642),
  P = n(51144),
  w = n(434404),
  R = n(471613),
  Z = n(999382),
  D = n(981631),
  A = n(185923),
  k = n(388032),
  W = n(945424),
  L = n(951565);

function M(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}
let G = d().throttle(h.OQ, 1e3),
  U = e => {
    let {
      currentTarget: t,
      which: n
    } = e;
    13 === n && t.blur()
  },
  B = e => {
    let {
      guildId: t,
      emoji: n,
      onEdit: s,
      editingDisabled: l = !1
    } = e, [o, c] = i.useState(n.name), d = E.ZP.getEmojiURL({
      id: n.id,
      animated: n.animated,
      size: 32
    }), u = P.ZP.useUserTag(n.user);
    return (0, r.jsxs)("div", {
      className: a()(W.emojiRow, L.card),
      children: [(0, r.jsx)("div", {
        className: W.emojiColumn,
        children: (0, r.jsx)(g.ua7, {
          text: n.available ? null : k.NW.string(k.t["KUzI7+"]),
          children: e => {
            var t, i;
            return (0, r.jsx)("div", (t = M({}, e), i = i = {
              className: a()(W.emojiImage, {
                [W.emojiDisabled]: !n.available
              }),
              style: {
                backgroundImage: "url(".concat(d, ")")
              }
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(i)).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
            }), t))
          }
        })
      }), (0, r.jsxs)("div", {
        className: W.column,
        children: [(0, r.jsx)(g.oil, {
          className: a()(W.emojiAliasInput, {
            [W.emojiAliasInputDisabled]: l
          }),
          inputClassName: W.emojiInput,
          placeholder: k.NW.string(k.t.qUpzYG),
          onKeyPress: U,
          onChange: c,
          onBlur: () => {
            o !== n.name && (0, h.dv)({
              guildId: t,
              emojiId: n.id,
              name: S.ZP.sanitizeEmojiName(o)
            })
          },
          size: g.oil.Sizes.MINI,
          value: o,
          maxLength: A.Yc,
          disabled: l
        }), (0, r.jsx)("div", {
          className: W.emojiAliasPlaceholder,
          children: (0, r.jsx)("div", {
            className: W.emojiAliasPlaceholderContent,
            children: o.length > 0 ? o : k.NW.string(k.t.qUpzYG)
          })
        })]
      }), (0, r.jsxs)("div", {
        className: W.column,
        children: [(0, r.jsx)(g.qEK, {
          src: n.user.getAvatarURL(t, 20),
          "aria-label": u,
          size: g.EFr.SIZE_20
        }), (0, r.jsx)(g.R94, {
          className: W.emojiRowText,
          children: u
        })]
      }), null != s && !l && (0, r.jsx)(g.P3F, {
        "aria-label": k.NW.string(k.t.bt75u7),
        className: W.editEmojiRolesButton,
        onClick: () => s(n, t),
        children: (0, r.jsx)(g.vdY, {
          size: "md",
          color: "currentColor",
          className: W.editEmojiRolesIcon
        })
      }), !l && (0, r.jsx)(f.Z, {
        className: W.emojiRemove,
        onClick: () => {
          (0, h.RE)(t, n.id).catch(e => {
            let {
              status: t
            } = e;
            429 === t && p.Z.show({
              title: k.NW.string(k.t.iufib2),
              body: k.NW.string(k.t["Whhv4+"])
            })
          })
        }
      })]
    })
  },
  F = e => {
    let {
      isLoading: t,
      staticEmojis: i,
      animatedEmojis: s,
      theme: a,
      guild: l
    } = e;
    return t ? (0, r.jsx)(g.$jN, {
      className: W.spinner,
      type: g.$jN.Type.SPINNING_CIRCLE
    }) : 0 === i.length && 0 === s.length ? (0, r.jsxs)(g.ubH, {
      theme: a,
      className: W.empty,
      children: [(0, r.jsx)(g.oxh, {
        darkSrc: n(458601),
        lightSrc: n(673557),
        width: 272,
        height: 212
      }), (0, r.jsx)(g.OZU, {
        note: k.NW.string(k.t.RBbtMz),
        children: k.NW.string(k.t.lxsmBQ)
      })]
    }) : (0, r.jsxs)("div", {
      children: [(0, r.jsx)(z, {
        title: k.NW.string(k.t.sMOuub),
        maxSlots: (0, T.y4)(l),
        emojiCount: i.length
      }), (0, r.jsx)(H, {
        emojis: i,
        guild: l
      }), (0, r.jsx)(z, {
        title: k.NW.string(k.t.wWjQyc),
        maxSlots: (0, T.y4)(l),
        emojiCount: s.length
      }), (0, r.jsx)(H, {
        emojis: s,
        guild: l
      })]
    })
  },
  z = e => {
    let {
      title: t,
      maxSlots: n,
      emojiCount: i
    } = e;
    return (0, r.jsxs)(g.vwX, {
      tag: g.RB0.H2,
      className: W.title,
      children: [t, (0, r.jsxs)("span", {
        children: [" — ", k.NW.format(k.t.sgL8sL, {
          count: n - i
        })]
      })]
    })
  },
  H = e => {
    let {
      emojis: t,
      guild: n,
      onEdit: s,
      editingDisabled: a = !1
    } = e, l = i.useMemo(() => [...t].reverse(), [t]), {
      canManageGuildExpression: o
    } = (0, y.Gw)(n);
    return 0 === t.length ? (0, r.jsx)(g.R94, {
      type: g.geA.DESCRIPTION,
      className: W.content,
      children: k.NW.string(k.t.SpxYoa)
    }) : (0, r.jsxs)(g.hjN, {
      className: W.content,
      children: [(0, r.jsxs)("div", {
        className: W.emojiTable,
        children: [(0, r.jsx)(g.R94, {
          type: g.geA.DESCRIPTION,
          className: W.emojiColumn,
          children: k.NW.string(k.t.Z0i3Gh)
        }), (0, r.jsx)(g.R94, {
          type: g.geA.DESCRIPTION,
          className: W.columnLabel,
          children: k.NW.string(k.t.giajw8)
        }), (0, r.jsx)(g.R94, {
          type: g.geA.DESCRIPTION,
          className: W.columnLabel,
          children: k.NW.string(k.t.edavpq)
        })]
      }), l.map(e => (0, r.jsx)(B, {
        guildId: n.id,
        emoji: e,
        onEdit: s,
        editingDisabled: a || !o(e)
      }, e.id))]
    })
  },
  V = e => {
    let t, n, i, {
        staticEmojiCount: s,
        animatedEmojiCount: a,
        guild: l
      } = e,
      o = (0, T.y4)(l),
      c = Math.min(o - s, o - a),
      d = l.premiumTier,
      u = (0, T.FZ)(d, l.id);
    return null == u || d === D.Eu4.TIER_3 || c > 0 ? null : (c > o ? (t = k.NW.formatToPlainString(k.t.j0UH0t, {
      level: u
    }), n = k.NW.formatToPlainString(k.t.VQeyKy, {
      level: u
    }), i = D.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL) : (t = k.NW.string(k.t.zT9Sxc), n = k.NW.formatToPlainString(k.t.dBZ1RU, {
      level: u
    }), i = D.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL), (0, r.jsx)(v.Z, {
      header: t,
      text: n,
      guild: l,
      analyticsLocation: {
        page: D.ZY5.GUILD_SETTINGS,
        section: D.jXE.GUILD_SETTINGS_STICKERS,
        object: i,
        objectType: (0, T.ge)(u)
      }
    }))
  },
  Y = () => {
    let e = (0, m.e7)([Z.Z], () => Z.Z.getGuild()),
      [t, s] = i.useState("");
    o()(null != e, "ConnectedGuildSettingsEmoji must be rendered within a guild context");
    let a = (0, m.e7)([C.Z], () => C.Z.theme),
      {
        canCreateExpressions: l
      } = (0, y.XJ)(e),
      {
        revision: c,
        emojis: p
      } = (0, m.cj)([R.Z], () => ({
        revision: R.Z.getEmojiRevision(e.id),
        emojis: R.Z.getEmojis(e.id)
      })),
      h = (0, x.Z)(c),
      [f, v] = i.useState(!1),
      [E, S] = i.useState(!1),
      P = i.useRef(null);
    i.useEffect(() => {
      f && K()
    }, [f]), i.useEffect(() => {
      G(e.id)
    }, [e.id]), i.useEffect(() => {
      null != h && h < c && G(e.id)
    }, [c, h, e.id]);
    let [L, U] = i.useMemo(() => {
      let t = null == p ? void 0 : p.filter(t => !(0, _.Kt)(t, e.id)),
        [n, r] = d().partition(t, e => !e.animated);
      return [n, r]
    }, [p, e.id]), B = (0, T.y4)(e), z = Math.max(B - L.length, B - U.length), H = (n, r, i) => (0, N.G)({
      data: n,
      file: r,
      image: i,
      guildId: e.id,
      uploadId: t,
      hideErrorModal: !0
    }), Y = async n => {
      s((0, u.Z)()), I.default.track(D.rMx.EMOJI_UPLOAD_STARTED, {
        guild_id: e.id,
        upload_id: t
      }), await (0, O._)(n, H), v(!0)
    }, K = () => {
      null !== P.current && ((0, g.Mr3)(P.current), P.current = null)
    }, q = async e => {
      P.current = await (0, g.ZDy)(async () => {
        let {
          default: t
        } = await n.e("16169").then(n.bind(n, 935333));
        return n => (0, r.jsx)(t, M({
          processFiles: () => Y(e)
        }, n))
      })
    }, X = (0, j.l)(e);
    return (0, r.jsxs)("div", {
      className: W.emojiSettings,
      children: [0 === z ? null : (0, r.jsx)(b.Z, {
        className: W.emojiUploadContainer,
        onDrop: q
      }), (0, r.jsxs)(g.hjN, {
        tag: g.RB0.H1,
        title: k.NW.string(k.t.sMOuub),
        children: [(0, r.jsx)(V, {
          guild: e,
          staticEmojiCount: L.length,
          animatedEmojiCount: U.length
        }), (0, r.jsxs)(g.hjN, {
          className: W.uploader,
          children: [(0, r.jsx)(g.R94, {
            type: g.geA.DESCRIPTION,
            children: k.NW.format(k.t.TA1BR0, {
              count: B
            })
          }), X && (0, r.jsx)(g.R94, {
            type: g.geA.DESCRIPTION,
            children: k.NW.format(k.t.uMkfTk, {
              onClick: () => w.Z.open(e.id, D.pNK.ROLE_SUBSCRIPTIONS, void 0, D.KsC.ROLE_SUBSCRIPTION_EMOJI)
            })
          }), (0, r.jsxs)("div", {
            children: [(0, r.jsx)(g.vwX, {
              tag: g.RB0.H2,
              className: W.emojiUploadUploadRequirementsHeading,
              children: k.NW.string(k.t.jrXfy8)
            }), (0, r.jsxs)("ul", {
              className: W.emojiUploadUploadRequirementsList,
              children: [(0, r.jsx)("li", {
                children: (0, r.jsx)(g.R94, {
                  type: g.geA.DESCRIPTION,
                  children: k.NW.string(k.t.N2qTQ0)
                })
              }), (0, r.jsx)("li", {
                children: (0, r.jsx)(g.R94, {
                  type: g.geA.DESCRIPTION,
                  children: k.NW.format(k.t.gfAXoa, {
                    maxSize: A.xG
                  })
                })
              }), (0, r.jsx)("li", {
                children: (0, r.jsx)(g.R94, {
                  type: g.geA.DESCRIPTION,
                  children: k.NW.string(k.t.rnwKPD)
                })
              }), (0, r.jsx)("li", {
                children: (0, r.jsx)(g.R94, {
                  type: g.geA.DESCRIPTION,
                  children: k.NW.string(k.t["8Vr5QU"])
                })
              })]
            })]
          }), (0, r.jsxs)(g.zxk, {
            tabIndex: -1,
            size: g.zxk.Sizes.MEDIUM,
            onClick: () => {
              let t = (0, u.Z)();
              s(t), I.default.track(D.rMx.EMOJI_UPLOAD_STARTED, {
                guild_id: e.id,
                upload_id: t
              })
            },
            disabled: E || 0 === z || !l,
            submitting: E,
            focusProps: {
              within: !0
            },
            children: [k.NW.string(k.t.DU0dy8), z > 0 ? (0, r.jsx)(O.Z, {
              disabled: E || 0 === z || !l,
              tabIndex: 0,
              onChange: H,
              setLoading: S,
              multiple: !0
            }) : null]
          })]
        }), (0, r.jsx)(F, {
          isLoading: null == p,
          staticEmojis: L,
          animatedEmojis: U,
          guild: e,
          theme: a
        })]
      })]
    })
  }