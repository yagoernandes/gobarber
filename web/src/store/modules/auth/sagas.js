import { all, takeLatest, call, put } from 'redux-saga/effects'

import { signInSuccess, signFailure } from './actions'
import { toast } from 'react-toastify'

import api from '../../../services/api'
import history from '../../../services/history'

export function* signIn({ payload: { email, password } }) {
	try {
		const response = yield call(api.post, '/sessions', {
			email,
			password,
		})
		const { token, user } = response.data
		if (!user.provider) {
			toast.error('Usuário não é prestador')
			return
		}
		api.defaults.headers.Authorization = `Bearer ${token}`
		yield put(signInSuccess(token, user))
		history.push('/dashboard')
	} catch (err) {
		toast.error('Falha na autenticação, verifique seus dados!')
		yield put(signFailure())
	}
}

export function* signUp({ payload: { name, email, password } }) {
	try {
		yield call(api.post, '/users', {
			name,
			email,
			password,
			provider: true,
		})
		history.push('/')
		toast.success('Conta criada com sucesso, faça seu login!')
	} catch (err) {
		toast.error('Falha no cadastro, verifique seus dados!')
		yield put(signFailure())
	}
}

export function setToken({ payload }) {
	if (!payload) return
	const { token } = payload.auth
	if (token) api.defaults.headers.Authorization = `Bearer ${token}`
}

export default all([
	takeLatest('persist/REHYDRATE', setToken),
	takeLatest('@auth/SIGN_IN_REQUEST', signIn),
	takeLatest('@auth/SIGN_UP_REQUEST', signUp),
])
