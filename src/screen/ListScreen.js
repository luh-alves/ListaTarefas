import React, { useEffect, useState } from 'react'
import { View, Alert } from 'react-native'
import ButtonDefault from '../components/ButtonDefault'
import TextFieldName from '../components/TextFieldName';
import CheckTasks from '../components/CkeckTasks'
import { AsyncStorage } from "react-native";
import { connect } from 'react-redux'
import Axios from '../../node_modules/axios';
import addUser from '../actions/user';
import TaskInput from '../components/TaskInput';
import createTask from '../api/createTask';
import updateTasks from '../actions/updateTasks';
import updateTasksOnBackEnd from '../api/updateTasksOnBackEnd'
import deleteTask from '../api/deleteTask'

const ListScreen = ({ navigation, dispatch, userData, tasks }) => {
    useEffect(() => {
        AsyncStorage.getItem('user')
            .then(function (response) {
                if (response == null) {
                    navigation.navigate('LoginScreen')
                    return
                } else {
                    var saveDate = JSON.parse(response)
                    console.log('aqi', saveDate)
                    dispatch(addUser(saveDate))
                    return saveDate
                }
            })
            .then(data => {
                if (!data) {
                    return
                }
                return Axios.get('https://arbyte-todo-list-api.herokuapp.com/tasks', {
                    headers: { 'Authorization': `Bearer ${data.token}` }
                })
            })
            .then(response => response.data)
            .then(tasks => {
                console.log('Tasks', tasks)
                dispatch(updateTasks(tasks))
            })
            .catch(function (error) {
                Alert.alert('Usuario Não Encontrado!')
                console.log(error);
            });

    }, [])



    return (
        <View style={styles.container} >
            <TextFieldName title={userData.user.fullName} />
            <View>

                <TaskInput placeholder={'Adicionar tarefa'} name={'done'} type={'material'}
                    onCreateTask={(description, completed) => createTask(userData.token, {
                        description: description, completed: completed
                    })
                        .then(response => {
                            tasks.push(response.data)
                            dispatch(updateTasks(tasks))
                        })
                    }>
                </TaskInput>

                {tasks.sort((a, b) => {
                    return a.completed - b.completed
                }).map((task) =>
                    <CheckTasks key={task.id} task={task}
                        onDeleteTask={(id) => deleteTask(userData.token, id)
                            .then(() => {
                                const index = tasks.findIndex((item) => item.id === id)
                                console.log('aqui', index)
                                tasks.splice(index, 1)
                                dispatch(updateTasks(tasks))
                            })
                            .catch((error) => { console.log(error) })
                        }
                        onUpdateTask={(task) => updateTasksOnBackEnd(userData.token, task)
                            .then((response) => {
                                const index = tasks.findIndex((item) => item.id === task.id)
                                tasks.splice(index, 1, response.data)
                                dispatch(updateTasks(tasks))

                            })
                        }
                    />)}

            </View>
            <View style={styles.containerButton}>
                <ButtonDefault title={'Sair'} onPress={() => { navigation.navigate('LoginScreen') }} />
            </View>
        </View>
    )
}
const styles = {
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#ffffff',
    },
    containerButton: {
        flex: 2,
    }
}
const mapStoreToProps = store => {
    return ({
        userData: store.userData,
        tasks: store.tasks,
    })
}
export default connect(mapStoreToProps)(ListScreen)

