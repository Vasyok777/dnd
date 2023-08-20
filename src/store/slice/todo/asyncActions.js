import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchTodo = createAsyncThunk('todo/fetchTodoStatus', async () => {
	try {
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/todos'
		)
		return response.data
	} catch (error) {
		throw Error('Failed to fetch data from the server')
	}
})
