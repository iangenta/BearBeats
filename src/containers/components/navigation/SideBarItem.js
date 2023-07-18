import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; // Importa el componente Link desde react-router-dom

function SidebarItem({ Icon, label, href, active }) {
  return (
    <Link
      to={href} // Utiliza 'to' en lugar de 'href' para establecer la ruta
      className={`flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1 ${
        active ? 'text-white' : ''
      }`}
    >
      <Icon size={26} />
      <p className="truncate w-full">{label}</p>
    </Link>
  );
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {})(SidebarItem);
