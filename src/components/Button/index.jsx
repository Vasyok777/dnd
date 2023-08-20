import PropTypes from 'prop-types'
import React from 'react'
import cls from './Button.module.scss'

const Button = ({ children, className, onClick }) => {
	return (
		<button
			type='button'
			onClick={onClick}
			className={`${cls.button} ${className}`}
		>
			{children}
		</button>
	)
}

Button.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	onClick: PropTypes.func,
}

Button.defaultProps = {
	className: '',
	onClick: () => {},
}

export default Button
