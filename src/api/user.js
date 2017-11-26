import { API_URL } from '@/config'
import { getFetchPostConfigUsing } from '@/util'

const activateUser = cpf => {
  const params = getFetchPostConfigUsing({ cpf })

  const url = API_URL + 'user/activate'

  return new Promise((resolve, reject) => {
    fetch(url, params)
      .then(response => {
        if (response.ok) { return response.json() }
        return reject(response)
      })
      .then(resolve)
      .catch((error) => reject(error))
  })
}

export { activateUser }
