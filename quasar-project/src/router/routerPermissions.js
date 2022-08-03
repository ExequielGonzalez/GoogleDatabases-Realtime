// import { onAuthStateChanged } from 'firebase/auth'
// import { auth } from 'src/config/firebase'
// import { useSession } from 'src/stores/session'
import { useTasksStore } from "src/stores/tasks";

// let authExecuted = false


export default async function (to, from, next, store) {
  await getInitialData(store);
  return next()
}

async function getInitialData(store) {
  const tasks = useTasksStore()
  tasks.saveTasks([
    {
      id: 1,
      title: 'Task 1',
      description: 'This is a task',
      state: true,
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'This is a task',
      state: false,
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'This is a task',
      state: true,
    },
  ]);  
  // const session = await useSession(store);
  // if (session.user) {
  //   await getUserData(store, session.user);
  // }
}

// export default async function (to, from, next, store) {
//   if (to.meta.requiresAuth || to.name === 'login') {
//     const storeSession = useSession()
//     storeSession?.showLoading()
//     if (!authExecuted) {
//       authExecuted = true
//       try {
//         await new Promise(resolve => {
//           onAuthStateChanged(auth, () => {
//             resolve()
//           })
//         })
//         await authPermission(to, from, next, store)
//       } catch (e) {
//         console.error(e)
//       }
//     } else {
//       await authPermission(to, from, next, store)
//     }
//   } else {
//     return next()
//   }
// }

// async function authPermission (to, from, next, store) {
//   const storeSession = useSession()
//   if (auth.currentUser) {
//     if (to.name === 'login') {
//       await next({ name: 'directorioTabla' })
//     } else {
//       await next()
//     }
//     return await storeSession?.hideLoading()
//   } else {
//     await storeSession?.logout()
//     if (to.name === 'login') {
//       await next()
//     } else {
//       await next({ name: 'login' })
//     }
//     return await storeSession?.hideLoading()
//   }
// }
