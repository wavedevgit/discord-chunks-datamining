/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  FT: () => H,
  L3: () => U,
  ZP: () => X
}), n(47120), n(978209);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(512722),
  o = n.n(l),
  c = n(392711),
  A = n.n(c),
  d = n(772848),
  u = n(442837),
  g = n(481060),
  f = n(668781),
  m = n(80932),
  p = n(225433),
  h = n(599059),
  C = n(327802),
  b = n(110924),
  v = n(200876),
  x = n(730089),
  N = n(372444),
  j = n(889564),
  E = n(372129),
  I = n(357156),
  O = n(210887),
  y = n(626135),
  w = n(768581),
  P = n(176354),
  B = n(267642),
  D = n(51144),
  T = n(434404),
  S = n(471613),
  L = n(999382),
  R = n(981631),
  Q = n(185923),
  Z = n(388032),
  W = n(945424),
  k = n(951565);

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
let _ = A().throttle(m.OQ, 1e3),
  G = e => {
    let {
      guildId: t,
      emoji: n,
      onEdit: s,
      editingDisabled: l = !1
    } = e, [o, c] = i.useState(n.name), A = w.ZP.getEmojiURL({
      id: n.id,
      animated: n.animated,
      size: 32
    }), d = D.ZP.useUserTag(n.user);
    return (0, r.jsxs)("div", {
      className: a()(W.emojiRow, k.card),
      children: [(0, r.jsx)("div", {
        className: W.emojiColumn,
        children: (0, r.jsx)(g.ua7, {
          text: n.available ? null : Z.NW.string(Z.t["KUzI7+"]),
          children: e => {
            var t, i;
            return (0, r.jsx)("div", (t = M({}, e), i = i = {
              className: a()(W.emojiImage, {
                [W.emojiDisabled]: !n.available
              }),
              style: {
                backgroundImage: "url(".concat(A, ")")
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
      }), (0, r.jsx)("div", {
        className: W.column,
        children: (0, r.jsx)("div", {
          className: W.emojiAliasInputContainer,
          children: (0, r.jsx)(h.Z, {
            className: a()({
              [W.emojiAliasInputDisabled]: l
            }),
            disabled: l,
            minLen: 1,
            maxLen: Q.Yc,
            name: Z.NW.string(Z.t.qUpzYG),
            autoComplete: "off",
            value: null != o ? o : "",
            onBlur: () => {
              if (o !== n.name) {
                let e = P.ZP.sanitizeEmojiName(o);
                e !== n.name && (0, m.dv)({
                  guildId: t,
                  emojiId: n.id,
                  name: e
                }), c(e)
              }
            },
            onChange: e => {
              c(e.target.value)
            }
          })
        })
      }), (0, r.jsxs)("div", {
        className: W.column,
        children: [(0, r.jsx)(g.qEK, {
          src: n.user.getAvatarURL(t, 20),
          "aria-label": d,
          size: g.EFr.SIZE_20
        }), (0, r.jsx)(g.R94, {
          className: W.emojiRowText,
          children: d
        })]
      }), null != s && !l && (0, r.jsx)(g.P3F, {
        "aria-label": Z.NW.string(Z.t.bt75u7),
        className: W.editEmojiRolesButton,
        onClick: () => s(n, t),
        children: (0, r.jsx)(g.vdY, {
          size: "md",
          color: "currentColor",
          className: W.editEmojiRolesIcon
        })
      }), !l && (0, r.jsx)(p.Z, {
        className: W.emojiRemove,
        onClick: () => {
          (0, m.RE)(t, n.id).catch(e => {
            let {
              status: t
            } = e;
            429 === t && f.Z.show({
              title: Z.NW.string(Z.t.iufib2),
              body: Z.NW.string(Z.t["Whhv4+"])
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
        note: Z.NW.string(Z.t.RBbtMz),
        children: Z.NW.string(Z.t.lxsmBQ)
      })]
    }) : (0, r.jsxs)("div", {
      children: [(0, r.jsx)(U, {
        title: Z.NW.string(Z.t.sMOuub),
        maxSlots: (0, B.y4)(l),
        emojiCount: i.length
      }), (0, r.jsx)(H, {
        emojis: i,
        guild: l
      }), (0, r.jsx)(U, {
        title: Z.NW.string(Z.t.wWjQyc),
        maxSlots: (0, B.y4)(l),
        emojiCount: s.length
      }), (0, r.jsx)(H, {
        emojis: s,
        guild: l
      })]
    })
  },
  U = e => {
    let {
      title: t,
      maxSlots: n,
      emojiCount: i
    } = e;
    return (0, r.jsxs)(g.vwX, {
      tag: g.RB0.H2,
      className: W.title,
      children: [t, (0, r.jsxs)("span", {
        children: [" — ", Z.NW.format(Z.t.sgL8sL, {
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
    } = (0, I.Gw)(n);
    return 0 === t.length ? (0, r.jsx)(g.R94, {
      type: g.geA.DESCRIPTION,
      className: W.content,
      children: Z.NW.string(Z.t.SpxYoa)
    }) : (0, r.jsxs)(g.hjN, {
      className: W.content,
      children: [(0, r.jsxs)("div", {
        className: W.emojiTable,
        children: [(0, r.jsx)(g.R94, {
          type: g.geA.DESCRIPTION,
          className: W.emojiColumn,
          children: Z.NW.string(Z.t.Z0i3Gh)
        }), (0, r.jsx)(g.R94, {
          type: g.geA.DESCRIPTION,
          className: W.columnLabel,
          children: Z.NW.string(Z.t.giajw8)
        }), (0, r.jsx)(g.R94, {
          type: g.geA.DESCRIPTION,
          className: W.columnLabel,
          children: Z.NW.string(Z.t.edavpq)
        })]
      }), l.map(e => (0, r.jsx)(G, {
        guildId: n.id,
        emoji: e,
        onEdit: s,
        editingDisabled: a || !o(e)
      }, e.id))]
    })
  },
  z = e => {
    let t, n, i, {
        staticEmojiCount: s,
        animatedEmojiCount: a,
        guild: l
      } = e,
      o = (0, B.y4)(l),
      c = Math.min(o - s, o - a),
      A = l.premiumTier,
      d = (0, B.FZ)(A, l.id);
    return null == d || A === R.Eu4.TIER_3 || c > 0 ? null : (c > o ? (t = Z.NW.formatToPlainString(Z.t.j0UH0t, {
      level: d
    }), n = Z.NW.formatToPlainString(Z.t.VQeyKy, {
      level: d
    }), i = R.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL) : (t = Z.NW.string(Z.t.zT9Sxc), n = Z.NW.formatToPlainString(Z.t.dBZ1RU, {
      level: d
    }), i = R.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL), (0, r.jsx)(N.Z, {
      header: t,
      text: n,
      guild: l,
      analyticsLocation: {
        page: R.ZY5.GUILD_SETTINGS,
        section: R.jXE.GUILD_SETTINGS_STICKERS,
        object: i,
        objectType: (0, B.ge)(d)
      }
    }))
  },
  X = () => {
    let e = (0, u.e7)([L.Z], () => L.Z.getGuild()),
      [t, s] = i.useState("");
    o()(null != e, "ConnectedGuildSettingsEmoji must be rendered within a guild context");
    let a = (0, u.e7)([O.Z], () => O.Z.theme),
      {
        canCreateExpressions: l
      } = (0, I.XJ)(e),
      {
        revision: c,
        emojis: f
      } = (0, u.cj)([S.Z], () => ({
        revision: S.Z.getEmojiRevision(e.id),
        emojis: S.Z.getEmojis(e.id)
      })),
      m = (0, b.Z)(c),
      [p, h] = i.useState(!1),
      [N, w] = i.useState(!1),
      P = i.useRef(null);
    i.useEffect(() => {
      p && Y()
    }, [p]), i.useEffect(() => {
      _(e.id)
    }, [e.id]), i.useEffect(() => {
      null != m && m < c && _(e.id)
    }, [c, m, e.id]);
    let [D, k] = i.useMemo(() => {
      let t = null == f ? void 0 : f.filter(t => !(0, j.Kt)(t, e.id)),
        [n, r] = A().partition(t, e => !e.animated);
      return [n, r]
    }, [f, e.id]), G = (0, B.y4)(e), U = Math.max(G - D.length, G - k.length), H = (n, r, i) => (0, x.G)({
      data: n,
      file: r,
      image: i,
      guildId: e.id,
      uploadId: t,
      hideErrorModal: !0
    }), X = async n => {
      s((0, d.Z)()), y.default.track(R.rMx.EMOJI_UPLOAD_STARTED, {
        guild_id: e.id,
        upload_id: t
      }), await (0, E._)(n, H), h(!0)
    }, Y = () => {
      null !== P.current && ((0, g.Mr3)(P.current), P.current = null)
    }, K = async e => {
      P.current = await (0, g.ZDy)(async () => {
        let {
          default: t
        } = await n.e("16169").then(n.bind(n, 935333));
        return n => (0, r.jsx)(t, M({
          processFiles: () => X(e)
        }, n))
      })
    }, V = (0, v.l)(e);
    return (0, r.jsxs)("div", {
      className: W.emojiSettings,
      children: [0 === U ? null : (0, r.jsx)(C.Z, {
        className: W.emojiUploadContainer,
        onDrop: K
      }), (0, r.jsxs)(g.hjN, {
        tag: g.RB0.H1,
        title: Z.NW.string(Z.t.sMOuub),
        children: [(0, r.jsx)(z, {
          guild: e,
          staticEmojiCount: D.length,
          animatedEmojiCount: k.length
        }), (0, r.jsxs)(g.hjN, {
          className: W.uploader,
          children: [(0, r.jsx)(g.R94, {
            type: g.geA.DESCRIPTION,
            children: Z.NW.format(Z.t.TA1BR0, {
              count: G
            })
          }), V && (0, r.jsx)(g.R94, {
            type: g.geA.DESCRIPTION,
            children: Z.NW.format(Z.t.uMkfTk, {
              onClick: () => T.Z.open(e.id, R.pNK.ROLE_SUBSCRIPTIONS, void 0, R.KsC.ROLE_SUBSCRIPTION_EMOJI)
            })
          }), (0, r.jsxs)("div", {
            children: [(0, r.jsx)(g.vwX, {
              tag: g.RB0.H2,
              className: W.emojiUploadUploadRequirementsHeading,
              children: Z.NW.string(Z.t.jrXfy8)
            }), (0, r.jsxs)("ul", {
              className: W.emojiUploadUploadRequirementsList,
              children: [(0, r.jsx)("li", {
                children: (0, r.jsx)(g.R94, {
                  type: g.geA.DESCRIPTION,
                  children: Z.NW.string(Z.t.N2qTQ0)
                })
              }), (0, r.jsx)("li", {
                children: (0, r.jsx)(g.R94, {
                  type: g.geA.DESCRIPTION,
                  children: Z.NW.format(Z.t.gfAXoa, {
                    maxSize: Q.xG
                  })
                })
              }), (0, r.jsx)("li", {
                children: (0, r.jsx)(g.R94, {
                  type: g.geA.DESCRIPTION,
                  children: Z.NW.string(Z.t.rnwKPD)
                })
              }), (0, r.jsx)("li", {
                children: (0, r.jsx)(g.R94, {
                  type: g.geA.DESCRIPTION,
                  children: Z.NW.string(Z.t["8Vr5QU"])
                })
              })]
            })]
          }), (0, r.jsxs)(g.zxk, {
            tabIndex: -1,
            size: g.zxk.Sizes.MEDIUM,
            onClick: () => {
              let t = (0, d.Z)();
              s(t), y.default.track(R.rMx.EMOJI_UPLOAD_STARTED, {
                guild_id: e.id,
                upload_id: t
              })
            },
            disabled: N || 0 === U || !l,
            submitting: N,
            focusProps: {
              within: !0
            },
            children: [Z.NW.string(Z.t.DU0dy8), U > 0 ? (0, r.jsx)(E.Z, {
              disabled: N || 0 === U || !l,
              tabIndex: 0,
              onChange: H,
              setLoading: w,
              multiple: !0
            }) : null]
          })]
        }), (0, r.jsx)(F, {
          isLoading: null == f,
          staticEmojis: D,
          animatedEmojis: k,
          guild: e,
          theme: a
        })]
      })]
    })
  }