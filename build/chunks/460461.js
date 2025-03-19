/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  J: () => B,
  Z: () => T
}), n(266796), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(301563), n(627494), n(757143), n(474991), n(398202);
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(692547),
  l = n(481060),
  o = n(225433),
  c = n(484614),
  A = n(852860),
  d = n(688465),
  u = n(970061),
  g = n(456268),
  f = n(134432),
  m = n(813197),
  p = n(208567),
  h = n(496675),
  C = n(768581),
  b = n(63063),
  v = n(434404),
  x = n(999382),
  N = n(718157),
  j = n(450474),
  E = n(190287),
  I = n(465520),
  O = n(981631),
  y = n(388032),
  w = n(189350);
let P = "https:" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/servers/",
  B = () => {
    let {
      guild: e,
      guildMetadata: t,
      submitting: n
    } = (0, s.cj)([x.Z], () => ({
      submitting: x.Z.isSubmitting(),
      guild: x.Z.getGuild(),
      guildMetadata: x.Z.getMetadata()
    }));
    return (0, r.jsx)(A.Z, {
      submitting: n,
      onReset: () => {
        null != e && v.Z.init(e.id)
      },
      onSave: () => {
        null != e && (v.Z.saveGuild(e.id, {
          discoverySplash: e.discoverySplash,
          description: e.description
        }), (0, g.Vv)({
          guildId: e.id,
          primaryCategoryId: t.primaryCategoryId,
          keywords: t.keywords,
          emojiDiscoverabilityEnabled: t.emojiDiscoverabilityEnabled,
          partnerActionedTimestamp: t.partnerActionedTimestamp,
          partnerApplicationTimestamp: t.partnerApplicationTimestamp,
          isPublished: t.isPublished,
          reasonsToJoin: t.reasonsToJoin,
          socialLinks: t.socialLinks.filter(e => e),
          about: t.about
        }))
      }
    })
  },
  D = () => {
    var e;
    let t = i.useRef(null),
      n = (0, s.e7)([x.Z], () => x.Z.getGuild()),
      [A, B] = i.useState(!1);
    i.useEffect(() => {
      A || null == n || ((0, g.le)(), (0, g.aC)(n.id), (0, g.i3)(n.id), B(!0))
    }, [n, A]);
    let {
      canManageGuild: D
    } = (0, s.cj)([h.Z], () => ({
      canManageGuild: h.Z.can(O.Plq.MANAGE_GUILD, n)
    })), T = (0, s.e7)([x.Z], () => x.Z.isGuildMetadataLoaded()), S = (0, s.e7)([x.Z], () => null != n ? x.Z.getMetadata() : null), L = (0, s.e7)([x.Z], () => null != n && (null == S ? void 0 : S.isPublished) ? x.Z.getSlug() : null), [R, Q] = i.useState([!0]), [Z, W] = i.useState(!0), [k, M] = i.useState([!1]), [_, G] = i.useState([""]), F = e => {
      let t = Object.entries(I.z).filter(e => !_.includes(e[1].presentation)).map(e => ({
        label: e[1].presentation,
        value: e[0]
      }));
      return null == e || "" === e ? t : t.concat({
        label: e,
        value: e
      })
    }, U = e => {
      try {
        var t, n, r, i;
        let s = new URL(e).hostname.split(".");
        if (3 === s.length && "bandcamp" === s[1].toLowerCase()) return I.z.bandcamp.presentation;
        let a = null !== (n = null === (t = s.shift()) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== n ? n : "";
        if ("www" === a && (a = null !== (i = null === (r = s.shift()) || void 0 === r ? void 0 : r.toLowerCase()) && void 0 !== i ? i : ""), a in I.z) return I.z[a].presentation;
        return null
      } catch (e) {
        return null
      }
    };
    i.useEffect(() => {
      if (null !== S) {
        let e = [],
          t = [];
        S.socialLinks.forEach((n, r) => {
          if ("" !== n) {
            let i = U(n);
            null !== i ? (t[r] = i, e[r] = !0) : e[r] = !1
          } else e[r] = !0
        }), G(t), Q(e), W(e.every(e => !0 === e))
      }
    }, [S]);
    let H = (0, s.e7)([x.Z], () => null != n ? x.Z.getErrors() : null);
    if (null == n || null == S) return null;
    let z = e => {
        v.Z.updateGuild({
          discoverySplash: e
        })
      },
      X = e => {
        (0, g.W1)(n.id, e), e ? (0, g.Vv)({
          guildId: n.id,
          primaryCategoryId: S.primaryCategoryId,
          keywords: S.keywords,
          emojiDiscoverabilityEnabled: S.emojiDiscoverabilityEnabled,
          partnerActionedTimestamp: S.partnerActionedTimestamp,
          partnerApplicationTimestamp: S.partnerApplicationTimestamp,
          isPublished: !0,
          reasonsToJoin: S.reasonsToJoin,
          socialLinks: S.socialLinks,
          about: S.about
        }) : (0, g.Vv)({
          guildId: n.id,
          primaryCategoryId: S.primaryCategoryId,
          keywords: S.keywords,
          emojiDiscoverabilityEnabled: S.emojiDiscoverabilityEnabled,
          partnerActionedTimestamp: S.partnerActionedTimestamp,
          partnerApplicationTimestamp: S.partnerApplicationTimestamp,
          isPublished: !1,
          reasonsToJoin: S.reasonsToJoin,
          socialLinks: S.socialLinks,
          about: S.about
        }), v.Z.saveGuild(n.id, {
          discoverySplash: n.discoverySplash,
          description: n.description
        })
      },
      Y = (e, t) => {
        let r = [...S.socialLinks],
          i = [..._],
          s = [...R];
        i[t] = e, r[t] = I.z[e].baseUrl, s[t] = !0, Q(s), G(i), W(s.every(e => !0 === e)), (0, g.t$)(n.id, r)
      },
      K = (e, t) => {
        let r = [...S.socialLinks],
          i = r[t],
          s = e;
        0 === i.length && s.length > 1 && !1 === RegExp("^https?:").test(s) && (s = "https://" + s), !/\.(zip|exe|pdf|dmg|msi|apk|rar|7z|tar|gz|iso|docx?|xlsx?|pptx?|mp4|mp3)$/i.test(s) && (r[t] = s, (0, g.t$)(n.id, r))
      },
      V = e => {
        let t = [...k];
        t.splice(e, 1), M(t);
        let r = [...R];
        r.splice(e, 1), Q(r);
        let i = [..._];
        i.splice(e, 1), G(i);
        let s = [...S.socialLinks];
        s.splice(e, 1), (0, g.t$)(n.id, s)
      },
      J = e => {
        let {
          reason: t = "",
          emoji_name: n = ""
        } = e;
        return null !== t && t.length >= 10 && t.length <= 128 && null !== n
      },
      q = e => {
        let {
          reason: t = "",
          emoji_name: n = ""
        } = e;
        return (null === t || "" === t) && null === n
      },
      $ = [{
        title: y.NW.string(y.t["/SWsHx"]),
        items: [{
          description: y.NW.string(y.t.DU8jFx),
          completed: null !== n.discoverySplash && "" !== n.discoverySplash
        }, {
          description: y.NW.string(y.t.SW5OHx),
          completed: null !== n.description && "" !== n.description
        }, {
          description: y.NW.string(y.t.m3b3WF),
          completed: null !== S.about && S.about.length >= 300 && S.about.length <= 2400
        }, {
          description: y.NW.string(y.t.qpx5MD),
          completed: null !== S.reasonsToJoin && S.reasonsToJoin.every(e => q(e) || J(e)) && S.reasonsToJoin.filter(J).length >= 2
        }]
      }],
      ee = (e, t) => {
        let n = [...k];
        n[e] = t, M(n)
      };
    return (0, r.jsx)("div", {
      className: w.settingsColumn,
      children: (0, r.jsx)("div", {
        className: w.settingsContainer,
        children: (0, r.jsx)(l.w0Z, {
          className: w.settingsScroller,
          children: (0, r.jsx)("main", {
            ref: t,
            className: w.settingsContent,
            children: (0, r.jsx)(l.JcV, {
              containerRef: t,
              children: (0, r.jsxs)("div", {
                className: w.container,
                children: [(0, r.jsxs)(l.hjN, {
                  className: w.mainContent,
                  title: (0, r.jsxs)("div", {
                    children: [y.NW.string(y.t.kGlQGB), " ", (0, r.jsx)(d.Z, {
                      className: w.betaTag
                    })]
                  }),
                  tag: l.RB0.H1,
                  children: [(0, r.jsxs)(l.R94, {
                    className: w.tabMainDescription,
                    type: l.geA.DESCRIPTION,
                    children: [y.NW.format(y.t["+ScrMT"], {
                      discordURL: window.GLOBAL_ENV.MARKETING_ENDPOINT
                    }), " ", y.NW.format(y.t.T6WtKy, {
                      learnMoreURL: b.Z.getArticleURL(O.BhN.SERVER_WEB_PAGES)
                    })]
                  }), (() => {
                    if (!S.isPublished || null == L) return;
                    let e = P + L;
                    return (0, r.jsxs)(l.hjN, {
                      className: w.noDividerFormSection,
                      children: [(0, r.jsx)(l.vwX, {
                        className: w.formTitle,
                        children: y.NW.string(y.t.safBZ2)
                      }), (0, r.jsx)(c.Z, {
                        value: e
                      }), (0, r.jsx)(l.zxk, {
                        className: w.viewPageButton,
                        size: l.zxk.Sizes.SMALL,
                        color: l.zxk.Colors.BRAND,
                        onClick: () => window.open(e),
                        children: y.NW.string(y.t.NI8iGB)
                      })]
                    })
                  })(), (0, r.jsx)(l.$i$, {
                    className: w.divider
                  }), (() => {
                    if (null != n) return (0, r.jsxs)(r.Fragment, {
                      children: [(0, r.jsxs)(l.hjN, {
                        children: [(0, r.jsx)(l.vwX, {
                          className: w.formTitle,
                          children: y.NW.string(y.t.GjPpSk)
                        }), (0, r.jsx)(l.R94, {
                          type: l.geA.DESCRIPTION,
                          className: w.description,
                          children: y.NW.string(y.t.MVXonJ)
                        })]
                      }), (0, r.jsx)(N.E, {
                        guildId: n.id,
                        guildMetadata: S,
                        isDisabled: !D
                      }), (0, r.jsxs)(l.hjN, {
                        className: w.noDividerFormSection,
                        children: [(0, r.jsx)(l.vwX, {
                          className: w.formTitle,
                          children: y.NW.string(y.t.oOPlPD)
                        }), (0, r.jsx)(j.Z, {
                          guild: n,
                          guildMetadata: S,
                          disabled: !D
                        })]
                      }), (null == H ? void 0 : H.category) != null ? (0, r.jsx)(l.Text, {
                        color: "text-danger",
                        className: w.error,
                        variant: "text-sm/normal",
                        children: H.category
                      }) : null]
                    })
                  })(), (0, r.jsx)(l.$i$, {
                    className: w.divider
                  }), (() => {
                    if (null != n) return (0, r.jsxs)(r.Fragment, {
                      children: [(0, r.jsxs)(l.hjN, {
                        className: w.twoColumnFormSection,
                        children: [(0, r.jsxs)("div", {
                          children: [(0, r.jsx)(l.vwX, {
                            className: w.formTitle,
                            children: y.NW.string(y.t["8bT/Cg"])
                          }), (0, r.jsx)(l.R94, {
                            type: l.geA.DESCRIPTION,
                            className: w.formDescription,
                            children: y.NW.string(y.t.WCWT7O)
                          }), (0, r.jsxs)(l.zxk, {
                            size: l.zxk.Sizes.SMALL,
                            color: l.zxk.Colors.PRIMARY,
                            children: [y.NW.string(y.t.yG2pUl), (0, r.jsx)(m.ZP, {
                              disabled: !D,
                              onChange: z
                            })]
                          })]
                        }), (0, r.jsx)(p.Z, {
                          image: n.discoverySplash,
                          makeURL: e => C.ZP.getGuildDiscoverySplashURL({
                            id: n.id,
                            splash: e,
                            size: 512 * (0, f.x_)()
                          }),
                          disabled: !D,
                          onChange: z,
                          hint: y.NW.string(y.t.uPvxqK),
                          imageClassName: w.imageUploaderInnerSquare,
                          hideSize: !0
                        })]
                      }), (null == H ? void 0 : H.discovery_splash) != null ? (0, r.jsx)(l.Text, {
                        color: "text-danger",
                        variant: "text-sm/normal",
                        children: H.discovery_splash
                      }) : null]
                    })
                  })(), (0, r.jsx)(l.$i$, {
                    className: w.divider
                  }), (0, r.jsxs)(l.hjN, {
                    children: [(0, r.jsx)(l.vwX, {
                      className: w.formTitle,
                      children: y.NW.string(y.t["RSfm+v"])
                    }), (0, r.jsx)(l.R94, {
                      className: w.description,
                      type: l.geA.DESCRIPTION,
                      children: y.NW.string(y.t.IBi6h4)
                    }), (0, r.jsx)(l.Kx8, {
                      value: null !== n.description ? n.description : "",
                      placeholder: y.NW.string(y.t.rFa9Ul),
                      onChange: e => {
                        var t;
                        v.Z.updateGuild({
                          description: null !== (t = null == e ? void 0 : e.replaceAll("\n", "")) && void 0 !== t ? t : ""
                        })
                      },
                      maxLength: 120,
                      disabled: !D
                    })]
                  }), (0, r.jsx)(l.$i$, {
                    className: w.divider
                  }), (() => {
                    if (null == S) return null;
                    let e = 0 === S.reasonsToJoin.length ? [, , , , ].fill({
                      reason: "",
                      emoji_name: null
                    }) : S.reasonsToJoin;
                    return (0, r.jsxs)(l.hjN, {
                      children: [(0, r.jsx)(l.vwX, {
                        className: w.formTitle,
                        children: y.NW.string(y.t.vUmXsb)
                      }), (0, r.jsx)(l.R94, {
                        type: l.geA.DESCRIPTION,
                        className: w.description,
                        children: y.NW.string(y.t.esnBnZ)
                      }), (0, r.jsx)("div", {
                        className: w.reasonToJoin,
                        children: (0, r.jsx)(E.Z, {
                          reasonMinLength: 10,
                          reasonMaxLength: 128,
                          guildId: n.id,
                          reasons: e
                        })
                      }), (null == H ? void 0 : H.reasons_to_join) != null ? (0, r.jsx)(l.Text, {
                        color: "text-danger",
                        variant: "text-sm/normal",
                        children: H.reasons_to_join
                      }) : null]
                    })
                  })(), (0, r.jsx)(l.$i$, {
                    className: w.divider
                  }), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(l.hjN, {
                      children: [(0, r.jsx)(l.vwX, {
                        className: w.formTitle,
                        children: y.NW.string(y.t["lu+BmJ"])
                      }), (0, r.jsx)(l.R94, {
                        className: w.description,
                        type: l.geA.DESCRIPTION,
                        children: y.NW.string(y.t.ozSi8v)
                      }), (0, r.jsx)(l.Kx8, {
                        showCharacterCount: !0,
                        className: w.textArea,
                        value: S.about,
                        placeholder: y.NW.string(y.t.TduTbm),
                        onChange: e => {
                          (0, g.mA)(n.id, e)
                        },
                        minLength: 300,
                        maxLength: 2400,
                        disabled: !D,
                        defaultDirty: (null === (e = S.about) || void 0 === e ? void 0 : e.length) > 0
                      }, "text-area-".concat(T))]
                    }), (null == H ? void 0 : H.about) != null ? (0, r.jsx)(l.Text, {
                      color: "text-danger",
                      variant: "text-sm/normal",
                      children: H.about
                    }) : null]
                  }), (0, r.jsx)(l.$i$, {
                    className: w.divider
                  }), (0, r.jsxs)(l.hjN, {
                    children: [(0, r.jsx)(l.vwX, {
                      className: w.formTitle,
                      children: y.NW.string(y.t.V5mNyc)
                    }), (0, r.jsx)(l.R94, {
                      className: w.description,
                      type: l.geA.DESCRIPTION,
                      children: y.NW.string(y.t.d3kA9f)
                    }), S.socialLinks.map((e, t) => (0, r.jsxs)("div", {
                      className: w.socialLinksContainer,
                      onMouseOver: () => ee(t, !0),
                      onFocus: () => ee(t, !0),
                      onMouseOut: () => ee(t, !1),
                      onBlur: () => ee(t, !1),
                      children: [(0, r.jsx)(l.q4e, {
                        className: S.isPublished ? w.socialLinksDropdownMax : w.socialLinksDropdownMin,
                        options: F(_[t]),
                        placeholder: y.NW.string(y.t.xSALIC),
                        value: _[t],
                        onChange: e => Y(e, t),
                        isDisabled: !D
                      }, "dropdown-" + t), (0, r.jsx)(l.oil, {
                        value: e,
                        className: S.isPublished ? w.socialLinksMax : w.socialLinksMin,
                        onChange: e => K(e, t),
                        placeholder: y.NW.string(y.t.Q6o4pK),
                        maxLength: 150,
                        disabled: !D
                      }, "link-" + t), R[t] ? (0, r.jsx)(l.owK, {
                        size: "custom",
                        className: S.isPublished ? w.validationButtonMax : w.validationButtonMin,
                        color: a.Z.unsafe_rawColors.GREEN_230.css,
                        width: 20,
                        height: 20
                      }, "validation-passed-" + t) : (0, r.jsx)(l.k$p, {
                        size: "custom",
                        className: S.isPublished ? w.validationButtonMax : w.validationButtonMin,
                        color: a.Z.unsafe_rawColors.RED_400.css,
                        width: 20,
                        height: 20
                      }, "validation-failed-" + t), D && (0, r.jsx)(o.Z, {
                        className: k[t] ? S.isPublished ? w.deleteButtonMax : w.deleteButtonMin : S.isPublished ? w.deleteButtonHiddenMax : w.deleteButtonHiddenMin,
                        onClick: () => V(t)
                      }, "delete-button-" + t)]
                    }, "social-container-" + t)), (null == H ? void 0 : H.social_links) != null ? (0, r.jsx)(l.Text, {
                      color: "text-danger",
                      variant: "text-sm/normal",
                      children: H.social_links
                    }) : null, (0, r.jsx)(l.zxk, {
                      size: l.zxk.Sizes.SMALL,
                      color: l.zxk.Colors.PRIMARY,
                      onClick: () => {
                        if (S.socialLinks.length < 9) {
                          let e = [...S.socialLinks];
                          (0, g.t$)(n.id, e.concat("")), G(_.concat(""))
                        }
                      },
                      disabled: !D || S.socialLinks.length >= 9,
                      children: y.NW.string(y.t.QvovjY)
                    })]
                  }), S.isPublished && (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(l.$i$, {
                      className: w.divider
                    }), (0, r.jsxs)(l.hjN, {
                      children: [(0, r.jsx)(l.vwX, {
                        className: w.formTitle,
                        children: y.NW.string(y.t["5yF7e3"])
                      }), (0, r.jsx)(l.R94, {
                        className: w.description,
                        type: l.geA.DESCRIPTION,
                        children: y.NW.string(y.t.eOFvqa)
                      }), (0, r.jsx)(l.zxk, {
                        size: l.zxk.Sizes.SMALL,
                        color: l.zxk.Colors.RED,
                        onClick: () => X(!1),
                        disabled: !D,
                        children: y.NW.string(y.t["DCHd/P"])
                      })]
                    })]
                  }), (null == H ? void 0 : H.is_published) != null ? (0, r.jsx)(l.Text, {
                    color: "text-danger",
                    variant: "text-sm/normal",
                    children: H.is_published
                  }) : null]
                }), !S.isPublished && (0, r.jsx)("div", {
                  className: w.checklist,
                  children: (0, r.jsx)(u.Z, {
                    title: y.NW.string(y.t["2kCyn5"]),
                    children: $,
                    buttonLabel: y.NW.string(y.t.tVK6S0),
                    buttonCallback: () => X(!0),
                    disabled: !D || !Z
                  })
                })]
              })
            })
          })
        })
      })
    })
  },
  T = () => null == (0, s.e7)([x.Z], () => x.Z.getGuild()) ? null : (0, r.jsx)(D, {})