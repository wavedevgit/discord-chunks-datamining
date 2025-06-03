/** Chunk was on 90202 **/
n.d(t, {
  Z: () => _
}), n(539854), n(997841);
var r = n(544891),
  i = n(881052),
  l = n(476326),
  o = n(865275),
  a = n(237992),
  s = n(45251),
  c = n(861990),
  u = n(959517),
  E = n(388032);

function d(e) {
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
class _ extends o.Z {
  async uploadFilesSimple(e) {
    super.upload(E.intl.string(E.t.jfKTen), e);
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
      this.setUploadingTextForUI(), await (0, a.Z)(this.files, !0, this._recomputeProgress.bind(this))
    } catch (e) {
      throw this._handleException(e), {
        file: this._file,
        reason: {
          type: u.xi.ERROR_SOURCE_UNKNOWN,
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
    super.upload(E.intl.string(E.t.jfKTen), e);
    let r = new AbortController;
    try {
      if (this.files = e, this._aborted || (this._handleStart(() => r.abort()), !await this.compressAndCheckFileSize())) return;
      this.setUploadingTextForUI(), await (0, a.Z)(this.files, !0, this._recomputeProgress.bind(this))
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
    var o, a, u, E;
    let _, I = [];
    if ((this.files.forEach((e, t) => {
        let n = (0, c.B)(e, t);
        e.item.platform === l.ow.WEB && I.push(d({}, n))
      }), null != n && null != t) ? _ = this._addAttachmentsToPayload(t, n, I) : (u = d({}, t), E = E = {
        attachments: I
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(E)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(E)).forEach(function(e) {
        Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(E, e))
      }), _ = u), null != _.scheduled_timestamp) {
      try {
        let e = await (0, s.PV)({
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
          code: null == e || null == (o = e.body) ? void 0 : o.code,
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
        code: null == e || null == (a = e.body) ? void 0 : a.code,
        body: null == e ? void 0 : e.body
      })
    }
  }
  constructor(e, t = "POST", n) {
    super(e, t, n)
  }
}