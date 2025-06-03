/** Chunk was on 90202 **/
n.d(t, {
  Z: () => d
}), n(539854), n(997841);
var r = n(544891),
  i = n(881052),
  l = n(687294),
  o = n(476326),
  a = n(45251),
  s = n(861990),
  c = n(959517),
  u = n(388032);

function E(e) {
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
class d extends l.Z {
  async uploadFilesSimple(e) {
    super.upload(u.intl.string(u.t.jfKTen), e);
    let t = new Promise((e, t) => {
        this.once("error", (e, n, r, i) => {
          t({
            file: e,
            code: n,
            responseBody: r,
            reason: i
          })
        }), this.once("complete", () => {
          this._errored || e(this.files)
        })
      }),
      n = new AbortController;
    try {
      if (this.files = e, this._aborted || (this._handleStart(() => n.abort()), !await this.compressAndCheckFileSize())) return t;
      this.setUploadingTextForUI(), await (0, l.$)(this.files, !0, this._recomputeProgress.bind(this))
    } catch (e) {
      throw this._handleException(e), {
        file: this._file,
        reason: {
          type: c.xi.ERROR_SOURCE_UNKNOWN,
          msg: e.toString()
        }
      }
    }
    return this._handleComplete(), this.files
  }
  async uploadFiles(e, t) {
    let {
      addFilesTo: n
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    super.upload(u.intl.string(u.t.jfKTen), e);
    let r = new AbortController;
    try {
      if (this.files = e, this._aborted || (this._handleStart(() => r.abort()), !await this.compressAndCheckFileSize())) return;
      this.setUploadingTextForUI(), await (0, l.$)(this.files, !0, this._recomputeProgress.bind(this))
    } catch (e) {
      this._handleException(e)
    }
    try {
      return await this._createMessage(r.signal, t, n)
    } catch (e) {
      if (this._raiseEndpointErrors) throw e;
      this._handleException(e)
    }
  }
  async _createMessage(e, t, n) {
    var l, c, u, d;
    let _, I = [];
    if ((this.files.forEach((e, t) => {
        let n = (0, s.B)(e, t);
        e.item.platform === o.ow.WEB && I.push(E({}, n))
      }), null != n && null != t) ? _ = this._addAttachmentsToPayload(t, n, I) : (u = E({}, t), d = d = {
        attachments: I
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(d)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(d)).forEach(function(e) {
        Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(d, e))
      }), _ = u), null != _.scheduled_timestamp) {
      try {
        let e = await (0, a.PV)({
          channelId: _.channel_id,
          scheduledTimestamp: _.scheduled_timestamp,
          messageSendData: {
            channelId: _.channel_id,
            content: _.content,
            flags: _.flags,
            nonce: _.nonce,
            message_reference: _.message_reference,
            allowed_mentions: _.allowed_mentions,
            tts: !1
          },
          attachments: I
        });
        return this._handleComplete(e.body), e.body
      } catch (e) {
        if (this._raiseEndpointErrors) throw new i.Hx(e);
        this._handleError({
          code: null == e || null == (l = e.body) ? void 0 : l.code,
          body: null == e ? void 0 : e.body
        })
      }
      return
    }
    let O = {
        url: this._url,
        body: _,
        signal: e,
        rejectWithError: !1
      },
      T = "POST" === this._method ? r.tn.post : r.tn.patch;
    try {
      let e = await T(O);
      return this._handleComplete(e.body), e.body
    } catch (e) {
      if (this._raiseEndpointErrors) throw new i.Hx(e);
      this._handleError({
        code: null == e || null == (c = e.body) ? void 0 : c.code,
        body: null == e ? void 0 : e.body
      })
    }
  }
  constructor(e, t = "POST", n) {
    super(e, t, n)
  }
}